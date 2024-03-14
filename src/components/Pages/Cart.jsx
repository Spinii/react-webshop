import { useEffect, useState } from "react"
import "./Cart.css"
import { CartProduct } from "../subComponents/CartProduct";
import { RiLoader2Fill } from "@remixicon/react";

function Cart(){

    const [shoppingCart, setShoppingCart] = useState(null)

    useEffect(() => {

            const fetchShoppingCart = async () => {
                try{
                    const response = await fetch('https://dummyjson.com/carts/2');
                    const data = await response.json();
                    console.log("this is data =>", data)
                    setShoppingCart(data.products)
                }
                catch (error){
                    console.error("error fetching products", error)
                }
            };

        fetchShoppingCart();

    }, [])

    console.log("this is cart", shoppingCart)


    return(
        <>
        {shoppingCart ? <div className="main-cart-container">
            <div className="cart-container">
                <h2 className="cart-container-title">My Shopping Cart</h2>
                <div className="cart-line-bold"></div>
                <div className="sub-titles">
                    <div className="product-title">
                        Product
                    </div>
                    <div className="price-title">
                        Price
                    </div>
                    <div className="total-title">
                        Total
                    </div>
                </div>
                <div className="cart-line-light"></div>
                {shoppingCart.map(product => <CartProduct product={product}/>)}
            </div>
        </div> : 
        <RiLoader2Fill />}
        </>
    )
}


export { Cart }