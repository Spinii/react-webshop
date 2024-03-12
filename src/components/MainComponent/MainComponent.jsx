import { useState, useEffect } from "react"
import "./MainComponent.css"
import { RiSkipLeftLine, RiSkipRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { PopularProducts } from "./PopularProducts";

function MainComponent() {
    const [products, setProducts] = useState([]);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=6&skip=0&select=title,price,thumbnail,description,images');
                const data = await response.json();
                console.log("Fetched Products:", data.products);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);



    const handleProductChange = (increment) => {
        setCurrentProductIndex((prevIndex) => (prevIndex + increment + products.length) % products.length);
    };

    const currentProduct = products[currentProductIndex];

    return (
        <>
            <div className="main-container">
                <div onClick={() => handleProductChange(-1)} className="main-container-btn">
                    <RiSkipLeftLine color="white"/>
                </div>
                {currentProduct && (
                    <div className="main-container-text">
                        <h2>{currentProduct.title}</h2>
                        <p>{currentProduct.description}</p>
                        <h6>{currentProduct.price}€</h6>
                        <div className="hero-btns">
                            <button className="mainBtn">Buy Product</button>
                            <Link to="/shop"><button className="mainBtn">Shop More</button></Link>
                        </div>
                    </div>
                )}
                <div className="main-container-product">
                    {currentProduct && <img src={currentProduct.images[0]} alt="Product"/>}
                </div>
                <div onClick={() => handleProductChange(1)} className="main-container-btn">
                    <RiSkipRightLine color="white"/>
                </div>
            </div>
            <PopularProducts />
        </>
    );
}

export { MainComponent };
