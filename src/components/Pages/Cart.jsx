import { useContext, useEffect, useState } from "react"
import "./Cart.css"
import { CartProduct } from "../subComponents/CartProduct";
import { RiLoader2Fill } from "@remixicon/react";
import { CartSummary } from "../subComponents/CartSummary";
import { AppContext } from "../Contex/AppContex";

function Cart(){

    const [summary, setSummary] = useState(null)
    const [shoppingCart, setShoppingCart] = useState(null)

    const { basket, setBasket, cartTotal, setCartTotal } = useContext(AppContext)

    useEffect(() => {

            const fetchShoppingCart = async () => {
                try{
                    const response = await fetch('https://dummyjson.com/carts/2');
                    const data = await response.json();
                    console.log("this is data =>", data)
                    setSummary(data)
                    setShoppingCart(data.products)
                }
                catch (error){
                    console.error("error fetching products", error)
                }
            };

        fetchShoppingCart();

    }, [])

    const basketProducts = basket.products


    useEffect(() => {

        let newCartTotal = 0;
        for(let i = 0; i < basketProducts.length; i++){

            const discountPrice = basketProducts[i].price - (basketProducts[i].price * basketProducts[i].discountPercentage / 100).toFixed(2);
    
            const total = Number((discountPrice * basketProducts[i].quantity).toFixed(2));

            newCartTotal += total;
            
        }

        setCartTotal(newCartTotal.toFixed(2))

    }, [basketProducts])

    const handleRemoveProduct = (productId) => {
        const updatedBasket = basketProducts.filter((product) => product.id !== productId);
        setBasket({ ...basket, products: updatedBasket });
    };


    return(
        <>
        {shoppingCart ? <div className="main-cart-container">
            <div className="cart-container-left">
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
                {basketProducts.map(product => <CartProduct key={product.id} product={product} onRemoveProduct={handleRemoveProduct}/>)}
            </div>
            <CartSummary cartTotal={cartTotal}/>
        </div> : 
        <RiLoader2Fill />}
        </>
    )
}


export { Cart }