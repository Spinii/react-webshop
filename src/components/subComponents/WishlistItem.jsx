import React, { useContext } from "react";
import "./WishlistItem.css";
import {
  RiDeleteBin2Fill,
  RiDeleteBin2Line,
  RiDeleteBin3Line,
} from "@remixicon/react";
import { AppContext } from "../Contex/AppContex";
import { Link } from "react-router-dom";

const WishlistItem = ({ wishlistProduct }) => {
  const { basket, setBasket } = useContext(AppContext);

  function addToBasketHandler() {
    console.log("clicked");
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket.products];
      const existingProductIndex = updatedBasket.findIndex(
        (item) => item.id === wishlistProduct.id
      );

      if (existingProductIndex !== -1) {
        updatedBasket[existingProductIndex].quantity += 1;
      } else {
        updatedBasket.push({ ...wishlistProduct, quantity: 1 });
      }

      return { ...prevBasket, products: updatedBasket };
    });
  }

  return (
    <>
      <div className="wishlist-light-line"></div>
      <div className="wishlist-item-container">
        <div className="wishlist-delete-thumbnail">
          <RiDeleteBin3Line size={"3rem"} className="delete-icon" />
          <Link key={wishlistProduct.id} to={`/product/${wishlistProduct.id}`}>
            <div className="wishlist-thumbnail">
              <img cla src={wishlistProduct.thumbnail}></img>
            </div>
          </Link>
        </div>
        <div className="wishlist-info">
          <h3 className="wishlist-item-title">{wishlistProduct.title}</h3>
          <h4 className="wishlist-item-price">{wishlistProduct.price}$</h4>
          <h4>In Stock</h4>
        </div>
        <div className="wishlist-button">
          <div
            className="wishlist-add-to-cart"
            onClick={() => addToBasketHandler()}
          >
            ADD TO CART
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistItem;
