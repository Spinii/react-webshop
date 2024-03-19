import "./CartSummary.css"
import "./CartProduct.css"
import { useContext, useState } from "react"
import { AppContext } from "../Contex/AppContex"

const CartSummary = () => {


    

    return (
        <>
           <div className="main-summary-container">
                <h2 className="cart-container-title">Summary</h2>
                <div className="cart-line-bold"></div>
                <h4>Do you have a promo code?</h4>
                <div className="promo-code-input">
                    <input type="text"></input>
                    <button>Submit</button>
                </div>
                <div className="cart-line-bold"></div>
                <div className="main-summary-row summary-row">
                    <h3>Subtotal</h3>
                    <h3>€</h3>
                </div>
                <div className="summary-row">
                    <h3>Shipping</h3>
                    <h3>Free Shipping</h3>
                </div>
                <div className="summary-row">
                    <h3>Sales Tax</h3>
                    <h3>24%</h3>
                </div>
                <div className="cart-line-bold"></div>
                <div className="summary-row">
                    <h2>Estimated Total</h2>
                    <h2>€</h2>
                </div>
                <div className="cart-line-bold"></div>
                <div className="summary-row-button">
                    Checkout
                </div>
                <div className="summary-row">
                    <p>Need Help? Call us at 888-444-222</p>
                </div>
                <div className="cart-line-bold"></div>
           </div>
        </>
    )
}


export { CartSummary }