import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const initialValues = {
  title: "",
  slug: "",
  image: "",
  description: "",
  price: "",
  promo_code: "",
  discount_percent: "",
  slots: [
    "10.00 AM - 10.30 AM",
    "10.30 AM - 11.00 AM",
    "11.00 AM - 11.30 AM",
    "11.30 AM - 12.00 PM",
    "12.00 PM - 12.30 PM",
    "12.30 PM - 01.00 PM",
    "02.00 PM - 02.30 PM",
    "02.30 PM - 03.00 PM",
    "03.00 PM - 03.30 PM",
    "03.30 PM - 04.00 PM",
  ],
};

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddTest = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      formik.setFieldValue("image", file);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const { image } = values;

        const imageFile = { image: image };

        const uploadImagePromise = axiosPublic.post(
          image_hosting_api,
          imageFile,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );

        const [imageUploadResult] = await Promise.all([uploadImagePromise]);

        console.log(imageUploadResult);

        if (imageUploadResult.data.success) {
          const testInfo = {
            title: values.title,
            slug: values.title.toLowerCase().split(" ").join("-"),
            image: imageUploadResult.data.data.display_url,
            description: values.description,
            price: values.price,
            promo_code: values.promo_code,
            discount_percent: values.discount_percent,
            slots: [
              "10.00 AM - 10.30 AM",
              "10.30 AM - 11.00 AM",
              "11.00 AM - 11.30 AM",
              "11.30 AM - 12.00 PM",
              "12.00 PM - 12.30 PM",
              "12.30 PM - 01.00 PM",
              "02.00 PM - 02.30 PM",
              "02.30 PM - 03.00 PM",
              "03.00 PM - 03.30 PM",
              "03.30 PM - 04.00 PM",
            ],
          };

          const { data } = await axiosSecure.post("/tests", testInfo);

          formik.resetForm();

          if (data.result.insertedId) {
            toast.success("Test added successfully!");
            navigate("/dashboard/admin/all-test");
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <SectionTitle heading="Add a New Test" />

      <form onSubmit={formik.handleSubmit} className="space-y-6 p-5 lg:p-10">
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2">Test Title</p>
            <input
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              name="title"
              placeholder="Test Title"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>
        </div>

        {/* price & image */}
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2"> Price </p>
            <input
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              type="number"
              name="price"
              placeholder="price"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold pb-2 pt-3 md:pt-0">Image</p>
            <input
              type="file"
              name="image"
              onChange={handleFileUpload}
              className="file-input rounded-md file-input-blue-500 file-input-bordered file-input-md w-full"
            />
          </div>
        </div>

        {/* discount and promo code */}
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2">Discount Percent</p>
            <input
              value={formik.values.discount_percent}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              type="number"
              name="discount_percent"
              placeholder="discount percent"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold pb-2 pt-3 md:pt-0">Promo Code</p>
            <input
              value={formik.values.promo_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              name="promo_code"
              placeholder="promo code"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>
        </div>

        {/* description */}
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2">Description</p>
            <textarea
              required
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              placeholder="description"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="btn w-full bg-blue-500 text-white hover:bg-blue-600 text-lg"
        >
          {formik.isSubmitting && (
            <span className="loading loading-spinner"></span>
          )}
          Add Test
        </button>
      </form>
    </div>
  );
};

export default AddTest;
