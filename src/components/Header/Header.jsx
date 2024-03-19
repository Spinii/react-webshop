import { Link } from "react-router-dom"
import './Header.css'
import { RiShoppingCartLine } from "@remixicon/react"
import { useContext, useState } from "react"
import { AppContext } from "../Contex/AppContex"



function Header(){

    const { basket } = useContext(AppContext)

    console.log("basket from header =>", basket)


    return(
        <>
           <nav>
                <div className="navbar">
                    <Link to="/">
                        <div className="logo">
                            LOGO
                        </div>
                    </Link>
                    <div className="navLinks">
                        <ul>
                            <Link to="/shop">
                                <li>Shop</li>
                            </Link>
                            <Link to="/about">
                                <li>About Us</li>
                            </Link>
                            <Link to="/contact">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <Link to="/cart">
                        <div className="shoppingCart">
                            <RiShoppingCartLine color="rgb(70, 70, 70)" size={"2.5rem"} />
                            <div className="amount">{basket.products.length}</div>
                        </div>
                    </Link>
                </div>
            </nav>
            
        </>
    )
}


export { Header }