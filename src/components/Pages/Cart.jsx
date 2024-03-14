import { useEffect, useState } from "react"
import "./Cart.css"

function Cart(){

    const [shoppingCart, setShoppingCart] = useState(null)

    useEffect(() => {

            const fetchShoppingCart = async () => {
                try{
                    const response = await fetch('https://dummyjson.com/carts/1')
                    const data = await response.json()
                    // console.log("this is data =>", data)
                    setShoppingCart(data.products)
                    // console.log("this is shopping cart ==>", shoppingCart)
                }
                catch (error){
                    console.error("error fetching products", error)
                }
            };

        fetchShoppingCart();

    }, [])

    return(
        <div className="main-cart-container">
            <div className="cart-container"></div>
        </div>
    )
}


export { Cart }