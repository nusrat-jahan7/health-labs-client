import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckoutForm";

// TODO add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="pb-20 shadow-lg">
      <Elements stripe={stripePromise} className="p-2">
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
