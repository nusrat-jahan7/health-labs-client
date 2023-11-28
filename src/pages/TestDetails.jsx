import { useLoaderData } from "react-router-dom";
import "../App.css";
import { MdOutlineQrCode } from "react-icons/md";
import { FaBookBookmark, FaDollarSign, FaUsers } from "react-icons/fa6";
import { calculateDiscount } from "../utils";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TestDetails = () => {
  const test = useLoaderData();
  let {
    title,
    image,
    slug,
    price,
    promo_code,
    available_slots,
    description,
    discount_percent,
    slots,
  } = test.result;

  const { user } = useAuth();

  const client = useAxiosSecure();

  const pathname = window.location.pathname.split("/");
  const date = pathname[pathname.length - 1];

  const [discountedPrice, setDiscountedPrice] = useState("");

  const handlePromo = (e) => {
    e.preventDefault();
    const form = e.target;
    const promo = form.promo.value;
    if (promo === promo_code) {
      const discountedPrice = calculateDiscount(price, discount_percent);
      setDiscountedPrice(discountedPrice);
      form.reset();
    }
  };

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;

    const payload = {
      user_email: user?.email,
      phone,
      test_slug: slug,
      booking_slot: selectedSlot,
      booking_date: date,
    };

    client.post("/appointment", payload).then(({ data }) => {
      if (data.code === 200) {
        toast(data.message);
      } else if (data.code === 201) toast.success(data.message);

      document.getElementById("my_modal_1").close();
    });
  };

  return (
    <div>
      <div className="banner h-auto aspect-auto ">
        <div className="overlay">
          <div className="flex justify-center items-center h-96 max-w-7xl mx-auto px-5 text-center">
            <h1 className="text-7xl font-bold text-blue-600 uppercase">
              {title} <br /> for {date}
            </h1>
          </div>
        </div>
      </div>

      {/* details section */}
      <div className="flex items-center gap-20 max-w-7xl mx-auto my-10 px-5 ">
        <img className="w-2/5" src={image} alt="" />
        {/* <h1 className="absolute top-0 right-0 bg-blue-600 text-white text-xl px-3 rounded-xl mt-2">
            30%
          </h1> */}

        <div>
          <div className="flex items-center text-blue-600 gap-3 pb-4">
            <MdOutlineQrCode className="text-2xl"></MdOutlineQrCode>
            <span className="text-2xl font-semibold">
              Promo Code : {promo_code}
            </span>
          </div>
          <div className="flex  items-center text-blue-600 gap-3 pb-4">
            <FaUsers className="text-2xl"></FaUsers>
            <span className="text-2xl font-semibold">
              Available Seats : {available_slots}
            </span>
          </div>

          <div className="flex whitespace-nowrap flex-wrap pb-4 gap-3">
            {slots?.map((slot, index) => (
              <div key={index} className="badge badge-lg w-auto text-xl gap-3">
                <input
                  type="radio"
                  id={`slot-${index}`}
                  name="slots"
                  value={slot}
                  checked={selectedSlot === slot}
                  onChange={() => setSelectedSlot(slot)}
                />
                <label htmlFor={`slot-${index}`}>{slot}</label>
              </div>
            ))}
          </div>
          <p className="text-lg border-y py-4">{description}</p>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="btn bg-blue-600 text-white hover:bg-blue-800 uppercase text-lg mt-4"
          >
            <FaBookBookmark className="text-2xl"></FaBookBookmark>
            book appointments
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
              <div className="flex justify-between font-semibold pt-3 pb-6 px-6">
                <button
                  onClick={() => document.getElementById("my_modal_1").close()}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
                <h1 className="text-2xl"> {title} </h1>
                <h3
                  className={`${
                    discountedPrice && "hidden"
                  } text-center text-xl`}
                >
                  Use <strong>{promo_code}</strong> for{" "}
                  <strong>{discount_percent}</strong>% off
                </h3>
                <p className="text-3xl">
                  ${discountedPrice ? discountedPrice : price}
                </p>
              </div>

              <div method="dialog" className="space-y-4 px-6">
                {!discountedPrice && (
                  <form onSubmit={handlePromo} className="join w-full">
                    <input
                      name="promo"
                      className="input input-bordered join-item w-full rounded"
                      placeholder="use promocode"
                    />
                    <button
                      type="submit"
                      className="btn join-item rounded bg-lime-600 text-lg text-white border-0 hover:bg-blue-800"
                    >
                      APPLY
                    </button>
                  </form>
                )}

                <form onSubmit={handleBook}>
                  <div className="">
                    <input
                      size="lg"
                      name="phone"
                      placeholder="your phone number"
                      className="p-2 rounded input input-bordered w-full"
                    />
                  </div>
                  <div className="modal-action flex justify-center">
                    <button
                      type="submit"
                      className="btn bg-blue-600 hover:bg-blue-800 text-white uppercase text-xl "
                    >
                      <FaDollarSign className="text-xl"></FaDollarSign> pay
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
