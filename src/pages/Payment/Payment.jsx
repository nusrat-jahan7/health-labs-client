import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckoutForm";




// TODO add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = ({discountedPrice}) => {
    return (
        <div className="pb-20 shadow-lg">
        
            <h2>Pay kor beda</h2>

                <Elements stripe={stripePromise}>
                <CheckOutForm discountedPrice={discountedPrice}></CheckOutForm>
                </Elements>

            
            
        </div>
    );
};

export default Payment;