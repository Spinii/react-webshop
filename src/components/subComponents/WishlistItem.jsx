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
  const { wishlist, setWishlist } = useContext(AppContext);

  function addToBasketHandler() {
    const existingProductIndex = basket.products.findIndex(
      (item) => item.id === wishlistProduct.id
    );

    const updatedBasket = [...basket.products];

    if (existingProductIndex !== -1) {
      updatedBasket[existingProductIndex].quantity += 1;
    } else {
      updatedBasket.push({ ...wishlistProduct, quantity: 1 });
    }

    setBasket({ ...basket, products: updatedBasket });
  }

  function removeFromWishlistHandler() {
    const updateWishlist = wishlist.wishlistProducts.filter(
      (item) => item.id !== wishlistProduct.id
    );

    setWishlist({ ...wishlist, wishlistProducts: updateWishlist });
  }

  return (
    <>
      <div className="wishlist-light-line"></div>
      <div className="wishlist-item-container">
        <div className="wishlist-delete-thumbnail">
          <RiDeleteBin3Line
            size={"3rem"}
            className="delete-icon"
            onClick={() => removeFromWishlistHandler()}
          />
          <Link key={wishlistProduct.id} to={`/product/${wishlistProduct.id}`}>
            <div className="wishlist-thumbnail">
              <img cla src={wishlistProduct.thumbnail}></img>
            </div>
          </Link>
        </div>
        <div className="wishlist-info">
          <h3 className="wishlist-item-title">{wishlistProduct.title}</h3>
          <h4 className="wishlist-item-price">{wishlistProduct.price}$</h4>
          <h4 className="wishlist-stock">In Stock</h4>
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
