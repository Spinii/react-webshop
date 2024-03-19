
import React from 'react'
import "./Checkout.css"
import CustomerInfoForm from '../subComponents/CustomerInfoForm'
import { CartSummaryCheckout } from '../subComponents/CartSummaryCheckout'


export const Checkout = () => {
  return (
    <>
        <div className="main-checkout-container">
           <CustomerInfoForm />
           <CartSummaryCheckout />
        </div>
    </>
  )
}
