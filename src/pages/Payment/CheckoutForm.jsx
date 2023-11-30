import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const appointmentInfo = JSON.parse(localStorage.getItem("appointment-info"));

  useEffect(() => {
    if (appointmentInfo.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: appointmentInfo.price })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, appointmentInfo.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("pay method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("tc id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          appointment_id: appointmentInfo.appointment_id,
          user_email: appointmentInfo.user_email,
          price: appointmentInfo.price,
          transactionId: paymentIntent.id,
          payment_date: new Date(),
        };

        axiosSecure.post("/payments", payment).then(({ data }) => {
          if (data?.result?.insertedId) {
            toast.success("Payment successful");
            localStorage.removeItem("appointment-info");
            navigate("/dashboard/my-appointments");
          }
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-gray-100 p-8 space-y-4 rounded-lg mt-20 max-w-4xl border mx-auto"
    >
      {!transactionId && (
        <>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="mx-auto items-center flex btn btn-outline"
            type="submit"
          >
            Pay Now
          </button>
        </>
      )}
      <p className="text-red-600 text-center">{error}</p>
      {transactionId && (
        <p className="text-green-500 text-center font-bold">
          Your Transaction Id: <br /> {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
