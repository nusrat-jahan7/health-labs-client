import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useFormik } from "formik";
import toast from "react-hot-toast";

const initialValues = {
  title: "",
  coupon: "",
  image: "",
  discount_rate: "",
  banner_text: "",
};

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBanner = () => {
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
          const bannerInfo = {
            title: values.title,
            coupon: values.coupon,
            image: imageUploadResult.data.data.display_url,
            discount_rate: values.discount_rate,
            banner_text: values.banner_text,
          };

          const { data } = await axiosSecure.post("/banners", bannerInfo);

          formik.resetForm();

          if (data.result.insertedId) {
            toast.success("Banner successfully!");
            navigate("/dashboard/admin/all-banner");
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
      <SectionTitle heading="Add Banner" />

      <form onSubmit={formik.handleSubmit} className="space-y-6 p-10">
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2">Banner Title</p>
            <input
              required
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              name="title"
              placeholder="Test Title"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold pb-2 pt-3 md:pt-0">Coupon Code</p>
            <input
              required
              value={formik.values.coupon}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              name="coupon"
              placeholder="coupon"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>
        </div>

        {/* discount & image */}
        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2"> Discount percentage</p>
            <input
              required
              value={formik.values.discount_rate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="lg"
              type="number"
              name="discount_rate"
              placeholder="discount percent"
              className="p-2 rounded-md input input-bordered w-full"
            />
          </div>

          <div className="flex-1">
            <p className="font-semibold pb-2 pt-3 md:pt-0">Image</p>
            <input
              required
              type="file"
              name="image"
              onChange={handleFileUpload}
              className="file-input rounded-md file-input-bordered file-input-md w-full"
            />
          </div>
        </div>

        <div className="md:flex lg:justify-between md:gap-5">
          <div className="flex-1">
            <p className="font-semibold pb-2">Banner Text</p>
            <textarea
              required
              value={formik.values.banner_text}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="banner_text"
              placeholder="banner text"
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
          Add Banner
        </button>
      </form>
    </div>
  );
};

export default AddBanner;
