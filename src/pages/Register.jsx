import { Link } from "react-router-dom";
import SelectField from "../components/SelectField";
import { blood, districts, upazilas } from "../enums";
import { useFormik } from "formik";
import navLogo from "/images/nav-logo.png";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import "../App.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  avatar: "",
  blood_group: "",
  district_id: "",
  upazila_id: "",
};

// const validationSchema = {};

const Register = () => {
  const { signUp, setLoading } = useAuth();
  const client = useAxiosSecure();

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const { email, password } = values;
      signUp(email, password)
        .then((result) => {
          console.log(result);
          // const userInfo = {
          //   name: name,
          //   email: email,
          //   avatar: avatar,
          //   blood_group: blood_group,
          //   district_id: district_id,
          //   upazila_id: upazila_id,
          // };
          // client.post("/users", userInfo).then(({ data }) => console.log(data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
      formik.reset();
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
              <div className="lg:flex lg:justify-between lg:gap-5">
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

              <div className="lg:flex lg:justify-between lg:gap-5">
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

              <div className="lg:flex lg:justify-between lg:gap-5">
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

              <div className="lg:flex lg:justify-between lg:gap-5">
                <div className="flex-1">
                  <p className="font-semibold pb-2">Avatar</p>
                  <input
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
                type="submit"
                className="btn w-full bg-blue-600 text-white hover:bg-blue-800 text-lg"
              >
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
