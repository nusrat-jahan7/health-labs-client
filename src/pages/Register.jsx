import { Link, useLocation, useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import { blood, districts, upazilas } from "../enums";
import { useFormik } from "formik";
import navLogo from "/images/nav-logo.png";
import useAuth from "../hooks/useAuth";
import "../App.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
// import * as Yup from "yup";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const initialValues = {
  name: "Md Sakibul Islam",
  email: "sakib@gmail.com",
  password: "Sakib@123",
  confirm_password: "Sakib@123",
  avatar: "https://i.ibb.co/hc10H6Q/dfa.jpg",
  blood_group: "A+",
  district_id: "33",
  upazila_id: "267",
};

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required"),
//   confirm_password: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   avatar: Yup.string(),
//   blood_group: Yup.string(),
//   district_id: Yup.string(),
//   upazila_id: Yup.string(),
// });

const Register = () => {
  const { signUp, updateUserProfile, setLoading, loading } = useAuth();
  const client = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("avatar", file);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const {
          name,
          email,
          avatar,
          password,
          blood_group,
          district_id,
          upazila_id,
        } = values;

        const imageFile = { image: avatar };

        // Upload image
        const uploadImagePromise = client.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        // Sign up user
        const signUpPromise = signUp(email, password);

        // Wait for all promises to resolve
        const [imageUploadResult] = await Promise.all([
          uploadImagePromise,
          signUpPromise,
        ]);

        // Check if image upload was successful
        if (imageUploadResult.data.success) {
          const userInfo = {
            email: email,
            name: name,
            avatar: imageUploadResult.data.data.display_url,
            blood_group: blood_group,
            district_id: district_id,
            upazila_id: upazila_id,
          };

          // Update user profile
          await updateUserProfile(userInfo.name, userInfo.avatar);

          // Add user to "/users"
          const { data } = await client.post("/users", userInfo);

          formik.resetForm();

          if (data.result.insertedId) {
            toast.success("Account created successfully!");
            navigate(from, { replace: true });
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="background">
      <div className="flex min-h-screen justify-center items-center max-w-7xl mx-auto px-5">
        <div className="shadow-xl bg-white p-8 my-8 lg:w-8/12">
          <Link to={"/"}>
            <img className="w-36 mx-auto mb-4" src={navLogo} alt="" />
          </Link>{" "}
          <p className="text-3xl font-semibold mt-3">Sign Up</p>
          <p className="mt-1 font-normal">
            Nice to meet you! Enter your details to Register
          </p>
          <div className="mt-6 mb-2">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="lg:flex flex-col lg:flex-row lg:justify-between gap-5">
                <div className="flex-1">
                  <p className="font-semibold pb-2">Name</p>
                  <input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="lg"
                    name="name"
                    placeholder="your name"
                    className="p-2 rounded input input-bordered w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold pb-2">Email</p>
                  <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    size="lg"
                    name="email"
                    placeholder="name@mail.com"
                    className="p-2 rounded input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="lg:flex flex-col lg:flex-row lg:justify-between gap-5">
                <div className="flex-1">
                  <p className="font-semibold pb-2">Password</p>
                  <input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    size="lg"
                    name="password"
                    placeholder="********"
                    className="p-2 rounded input input-bordered w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold pb-2">Confirm Password</p>
                  <input
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    size="lg"
                    name="confirm_password"
                    placeholder="********"
                    className="p-2 rounded input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="lg:flex flex-col lg:flex-row lg:justify-between gap-5">
                <div className="flex-1">
                  <p className=" font-semibold pb-2">District</p>
                  <SelectField
                    name="district_id"
                    options={districts}
                    onChange={(selectedOption) =>
                      formik.setFieldValue(
                        "district_id",
                        selectedOption ? selectedOption.value : ""
                      )
                    }
                    onBlur={formik.handleBlur}
                    value={blood.find(
                      (el) => el.value === formik.values.district_id
                    )}
                    isSearchable
                  />
                </div>
                <div className="flex-1">
                  <p className=" font-semibold pb-2">Upazila</p>
                  <SelectField
                    name="upazila_id"
                    options={upazilas}
                    onChange={(selectedOption) =>
                      formik.setFieldValue(
                        "upazila_id",
                        selectedOption ? selectedOption.value : ""
                      )
                    }
                    onBlur={formik.handleBlur}
                    value={blood.find(
                      (el) => el.value === formik.values.upazila_id
                    )}
                    isSearchable
                  />
                </div>
              </div>

              <div className="lg:flex flex-col lg:flex-row lg:justify-between gap-5">
                <div className="flex-1">
                  <p className="font-semibold pb-2">Avatar</p>
                  <input
                    onChange={handleFileUpload}
                    type="file"
                    className="file-input rounded file-input-bordered file-input-md w-full"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold pb-2">Blood Group</p>
                  <SelectField
                    name="blood_group"
                    options={blood}
                    onChange={(selectedOption) =>
                      formik.setFieldValue(
                        "blood_group",
                        selectedOption ? selectedOption.value : ""
                      )
                    }
                    onBlur={formik.handleBlur}
                    value={blood.find(
                      (el) => el.value === formik.values.blood_group
                    )}
                    isSearchable
                  />
                </div>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="btn w-full bg-blue-600 text-white hover:bg-blue-800 text-lg"
              >
                {loading && <span className="loading loading-spinner"></span>}
                Sign up
              </button>
            </form>
            <p className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium hover:text-blue-500 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
