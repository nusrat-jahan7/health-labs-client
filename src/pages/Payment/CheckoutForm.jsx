import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckOutForm = () => {

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [trasactionId, setTransactionId] = useState('')
    const navigate = useNavigate()
    const { user } = useAuth()
    console.log(user);
    const stripe = useStripe();

    const elements = useElements();

    const axiosSecure = useAxiosSecure()

    const discountedPrice = 20;

    useEffect(() => {
        if (discountedPrice > 0) {
            axiosSecure.post('http://localhost:8000/create-payment-intent', { price: 20 })
                .then(res => {
                    console.log('from checkout',res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, discountedPrice])

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
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('pay method', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log('intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('tc id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                // now save the payment in the database

                const payment = {
                    email: user.email,
                    price: discountedPrice,
                    trasactionId: paymentIntent.id,
                    date: new Date(),

                    //utc date convert. use moment js,
                    // cartIds: cart.map(item => item._id),

                    // menuItemIds: cart.map(item => item.menuId),
                    // status: 'pending',

                }

                const res = await axiosSecure.post('http://localhost:8000/payments', payment)
                console.log('payment saved', res);
                // refetch();
                if (res?.data?.paymentResult?.insertedId) {
                    toast.success("Payment successful")
                    navigate('/dashboard/appointments')
                }
            }
        }


    }

    return (
        <form onSubmit={handleSubmit} className="bg-blue-gray-100 p-8 space-y-4 border rounded-lg">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="mx-auto items-center flex btn btn-outline mt-20" type="submit">
                Pay
            </button>
            <p className="text-red-600 text-center">{error}</p>
            {trasactionId && <p className="text-green-500">Your Transaction Id: {trasactionId}</p>}

        </form>
    );
};

export default CheckOutForm;