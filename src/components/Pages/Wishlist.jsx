import { RiHeart2Line } from "@remixicon/react";
import React, { useContext } from "react";
import "./Wishlist.css";
import WishlistItem from "../subComponents/WishlistItem";
import { AppContext } from "../Contex/AppContex";

const Wishlist = () => {
  const { wishlist } = useContext(AppContext);

  const wishlistProduct = wishlist.wishlistProducts;

  console.log("wishlist =>", wishlistProduct);

  return (
    <>
      <div className="main-wishlist-container">
        <RiHeart2Line size={"6rem"} className="wishlist-heart" />
        <h2 className="main-wishlist-title">My Wishlist</h2>
        <div className="wishlist-items-container">
          <div className="wishlist-container-titles">
            <h4 className="wishlist-subtitle">Product Name</h4>
            <h4 className="wishlist-subtitle">Product Price</h4>
            <h4 className="wishlist-subtitle">Stock Status</h4>
          </div>
          {wishlistProduct.map((wishlistProduct) => (
            <WishlistItem wishlistProduct={wishlistProduct} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Wishlist };
