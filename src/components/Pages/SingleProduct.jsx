import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./SingleProduct.css"
import "../subComponents/PopularProducts.css"
import { RiLoader2Fill, RiStarFill } from '@remixicon/react';

const SingleProduct = () => {

    


    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                console.log("data =>", data);
                console.log("data price =>", product.price)
                setProductPrice(product.price)
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleCurrrentIndex(index){

        setCurrentIndex(index);
    }

    const [cartCount, setCartCount] = useState(0);


    function minusCartCount(){
        if(cartCount > 0){
            setCartCount(cartCount - 1)
        }
    }



    return (
        <div className='main'>
            {product ? 
            <div className='main-product-container'>
                <div className="left-side">
                    <div className="small-images">
                        {product.images.map((image, index) => <div className='img-container'><img onClick={() => handleCurrrentIndex(index)} className='small-image' key={index} src={image}></img></div> )}
                    </div>
                    <div className="big-images">
                        <img className='big-image' src={product.images[currentIndex]}></img>
                    </div>
                </div>
                <div className="right-side">
                    <div className="brand">
                    <h2>{product.title}</h2>
                    <div className="rating" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: ".5rem"}}>
                        <label>Rating: {product.rating}</label>
                        <RiStarFill size={"1.2rem"} color='blue'/>
                    </div>
                    <h3>Brand: {product.brand}</h3>
                    </div>
                    <p><strong>Description:</strong> {product.description}</p>
                    <h4>Price: {product.price}€</h4>
                    <div className="add-to-cart">
                        <div className="add-input">
                            <label onClick={() => minusCartCount()}>-</label>
                            <input value={cartCount}></input>
                            <label onClick={() => setCartCount(cartCount + 1)}>+</label>
                        </div>
                        <button className='mainBtn mainBtnLight'>Add To Cart</button>
                    </div>
                </div>
            </div> : 
            <div className="loading">
                <RiLoader2Fill size={"10rem"} color='blue'/>
            </div>
            }
        </div>
    );
}

export { SingleProduct };
