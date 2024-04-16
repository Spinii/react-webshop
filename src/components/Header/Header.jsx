import { Link } from "react-router-dom";
import "./Header.css";
import { RiShoppingCartLine, RiHeartLine } from "@remixicon/react";
import { useContext, useState } from "react";
import { AppContext } from "../Contex/AppContex";

function Header() {
  const { basket } = useContext(AppContext);

  const { wishlist } = useContext(AppContext);

  const totalQuantity = basket.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const wishlistQuantity = wishlist.wishlistProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // console.log("basket from header =>", basket);

  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/">
            <div className="logo">LOGO</div>
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
          <div className="userCartAndWish">
            <Link to="/wishlist">
              <div className="shoppingCart">
                <RiHeartLine color="rgb(70, 70, 70)" size={"2.5rem"} />
                <div className="amount">{wishlistQuantity}</div>
              </div>
            </Link>
            <Link to="/cart">
              <div className="shoppingCart">
                <RiShoppingCartLine color="rgb(70, 70, 70)" size={"2.5rem"} />
                <div className="amount">{totalQuantity}</div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Header };
