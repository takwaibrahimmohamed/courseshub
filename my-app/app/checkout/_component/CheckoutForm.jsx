
import { CartContext } from '@/app/_context/context';
import cartApis from '@/app/_utils/cartApis';
import OrderApis from '@/app/_utils/OrderApis';
import { useUser } from '@clerk/nextjs';
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, {useContext, useState} from 'react';
const CheckoutForm = ({amount}) => {
  const stripe = useStripe();
   const {cart,setCart} = useContext(CartContext)
   const {user} = useUser()

  const elements = useElements();
  const [loading, setLoading] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
 event.preventDefault();
    
    if (!stripe || !elements) return;
      const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  }
  createOrder()
  // sendEmail()
       // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch("/api/create-intent",{
      method:"POST",
      body:JSON.stringify({amount:amount})
    })
    const clientSecret =await res.json()
      const result = await stripe.confirmPayment({
clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/paymentConfurm",
      },
    });
  };
const createOrder = ()=>{
  let productIds=[]
  console.log("carts",cart)
  cart.forEach(el=>{
    productIds.push(el?.product?.id)
  })
  const data = {
    data:{
      email:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      amount,
      products:productIds
    }
  }
  OrderApis.creatOrder(data).then((res)=>{
    console.log("order",res)
    if(res){
       cart.forEach(el=>{
    cartApis.removeItemFromCart(el?.id).then((res)=>{

    })
  })
    }
  })
}
// const sendEmail = async ()=>{
//      const res = await fetch("/api/send",{
//       method:"POST",
     
//     })
// }
  return (
    <form onSubmit={handleSubmit}>
     <div className='mx-32 md:mx-[320px] mt-4'>
       <PaymentElement />
             <button className='bg-[#08D9D6] my-4 cursor-pointer p-2 text-white rounded-md w-full'>Submit</button>
       </div>

    </form>
  );
};

export default CheckoutForm;