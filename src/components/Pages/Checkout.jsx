
import React from 'react'
import { CartSummary } from '../subComponents/CartSummary'
import { RiBankCard2Fill, RiGift2Fill, RiPaypalFill } from '@remixicon/react'
import "./Checkout.css"


export const Checkout = () => {
  return (
    <>
        <div className="main-checkout-container">
           <div className="checkout-container">
                <div className="main-checkout-title">
                    Billing Info
                </div>
                <div className="checkout-subtitle">
                    Choose a payment option below and fill out the appropriate information
                </div>
                <div className="payment-icons">
                    <div className="payment-icon">
                        <RiBankCard2Fill />
                        <div className="payment-icon-text">
                            Bank Card
                        </div>
                    </div>
                    <div className="payment-icon">
                        <RiGift2Fill />
                        <div className="payment-icon-text">
                            Gift Card
                        </div>
                    </div>
                    <div className="payment-icon">
                        <RiPaypalFill />
                        <div className="payment-icon-text">
                            PayPal
                        </div>
                    </div>
                </div>
                <div className="buyer-info">
                    <div className="buyer-info-container">
                        <div className="info-title">
                            Billing Adress
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Full Name
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Adress 1
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Adress 2
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                City
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                State
                            </div>
                            <select>
                                <option>Select your state</option>
                                <option>State 1</option>
                                <option>State 2</option>
                                <option>State 3</option>
                                <option>State 4</option>
                                <option>State 5</option>
                            </select>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Zip Code
                            </div>
                            <input></input>
                        </div>
                    </div>
                    <div className="buyer-info-container">
                        <div className="info-title">
                            Credit Card Info
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Name on Card
                            </div>
                            <input type='text'></input>
                        </div>
                        <div className="info">
                            <div className="info-subtitle">
                                Card Number
                            </div>
                            <input type='number' placeholder='0000 - 0000 - 0000 - 0000'></input>
                        </div>
                        <div className="card-info">
                            <div className="card-info-cont">
                                <div className="info-subtitle">
                                    CCV
                                </div>
                                <input type='number'></input>
                            </div>
                            <div className="card-info-cont">
                                <div className="info-subtitle">
                                    Exp. Month
                                </div>
                                <select>
                                    <option>Month</option>
                                    <option>State 1</option>
                                    <option>State 2</option>
                                    <option>State 3</option>
                                    <option>State 4</option>
                                    <option>State 5</option>
                                </select>
                            </div>
                            <div className="card-info-cont">
                                <div className="info-subtitle">
                                    Exp. Date
                                </div>
                                <select>
                                    <option>Day</option>
                                    <option>State 1</option>
                                    <option>State 2</option>
                                    <option>State 3</option>
                                    <option>State 4</option>
                                    <option>State 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='checkoutBtn'>Continue</button>
                <div className="small-text">
                    Maybe want to go back?
                </div>
                <button className='go-back-checkoutBtn'>Go Back</button>
           </div>
           <CartSummary />
        </div>
    </>
  )
}
