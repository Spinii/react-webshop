import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.css";
import "../subComponents/PopularProducts.css";
import {
  RiArrowLeftCircleFill,
  RiLoader2Fill,
  RiStarFill,
  RiHeartLine,
  RiHeartFill,
} from "@remixicon/react";
import { AppContext } from "../Contex/AppContex";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { basket, setBasket } = useContext(AppContext);
  const { wishlist, setWishlist } = useContext(AppContext);
  const [cartCount, setCartCount] = useState(1);
  const [productPrice, setProductPrice] = useState(0);
  const [originalProductPrice, setOriginalProductPrice] = useState(0);
  const [likeProduct, setLikeProduct] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        // console.log("data =>", data);
        setProductPrice(data.price);
        setOriginalProductPrice(data.price);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const checkIfProductIsLiked = () => {
    if (product && product.id) {
      const likedProductId = wishlist.wishlistProducts.some(
        (item) => item.id === product.id
      );
      if (likedProductId) {
        setLikeProduct(true);
      }
    }
  };

  useEffect(() => {
    checkIfProductIsLiked();
  }, [product]);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrrentIndex(index) {
    setCurrentIndex(index);
  }

  function minusCartCount() {
    if (cartCount > 1) {
      setCartCount(cartCount - 1);
    }
  }

  function addToBasketHandler() {
    toast("Product Added To Cart");
    if (cartCount > 0) {
      setBasket((prevBasket) => {
        const updatedProducts = [...prevBasket.products];
        const existingProductIndex = updatedProducts.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
          updatedProducts[existingProductIndex].quantity += cartCount;
        } else {
          updatedProducts.push({ ...product, quantity: cartCount });
        }

        return { ...prevBasket, products: updatedProducts };
      });
    } else {
      window.alert("Please choose at least one product!");
    }
  }

  function handleWishlist() {
    if (!likeProduct) {
      setWishlist((prevWishlist) => {
        const updatedWishlist = [...prevWishlist.wishlistProducts];
        const existingProductIndex = updatedWishlist.findIndex(
          (item) => item.id === product.id
        );
        if (existingProductIndex !== -1) {
          updatedWishlist[existingProductIndex].quantity += 1;
        } else {
          updatedWishlist.push({ ...product, quantity: 1 });
        }
        return { ...prevWishlist, wishlistProducts: updatedWishlist };
      });
      setLikeProduct(true);
    } else {
      setWishlist((prevWishlist) => {
        const updatedWishlist = [...prevWishlist.wishlistProducts];
        const indexToRemove = updatedWishlist.findIndex(
          (item) => item.id === product.id
        );
        if (indexToRemove !== -1) {
          updatedWishlist.splice(indexToRemove, 1);
        }
        return { ...prevWishlist, wishlistProducts: updatedWishlist };
      });
      setLikeProduct(false);
    }
  }

  useEffect(() => {
    setProductPrice(originalProductPrice * cartCount);
  }, [cartCount]);

  console.log("wishlist =>", wishlist);

  return (
    <div className="main">
      {product ? (
        <div className="main-product-container">
          <div className="left-side">
            <RiArrowLeftCircleFill
              onClick={() => navigate(-1)}
              size={"3rem"}
              color="white"
              style={{ cursor: "pointer" }}
            />
            <div className="left-side-images">
              <div className="small-images">
                {product.images.map((image, index) => (
                  <div className="img-container">
                    <img
                      onClick={() => handleCurrrentIndex(index)}
                      key={index}
                      src={image}
                    ></img>
                  </div>
                ))}
              </div>
              <div className="big-images">
                <img
                  className="big-image"
                  src={product.images[currentIndex]}
                ></img>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="brand">
              <h2>{product.title}</h2>
              <div
                className="rating"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <label>Rating: {product.rating}</label>
                <RiStarFill size={"1.2rem"} color="blue" />
              </div>
              <h3>Brand: {product.brand}</h3>
            </div>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <h4>Price: {productPrice}€</h4>
            <div className="add-to-cart">
              <div className="add-input">
                <label onClick={() => minusCartCount()}>-</label>
                <input
                  value={cartCount}
                  style={{ minWidth: "50px" }}
                  readOnly
                ></input>
                <label onClick={() => setCartCount(cartCount + 1)}>+</label>
              </div>
              <div className="btns">
                <button
                  className="mainBtn mainBtnLight shopBtn"
                  onClick={() => addToBasketHandler()}
                >
                  Add To Cart
                </button>
                <div className="heart" onClick={() => handleWishlist()}>
                  {likeProduct ? (
                    <RiHeartFill color="red" />
                  ) : (
                    <RiHeartLine color="red" />
                  )}
                </div>
                <Link to="/cart">
                  <button className="mainBtn mainBtnLight shopBtn">
                    Go To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <RiLoader2Fill size={"10rem"} color="blue" />
        </div>
      )}
    </div>
  );
};

export { SingleProduct };
