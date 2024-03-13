import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./SingleProduct.css"
import "../subComponents/PopularProducts.css"
import { RiLoader2Fill } from '@remixicon/react';

const SingleProduct = () => {

    const disabledButton = {

        backgroundColor: "black",
        opacity: "50%"
    }

    const [button, setButton] = useState();


    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                console.log(data);
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
                    <label>Rating: {product.rating}</label>
                    <h3>Brand: {product.brand}</h3>
                    </div>
                    <p>Description: {product.description}</p>
                    <h4>Price: {product.price}€</h4>
                    <div className="add-to-cart">
                        <div className="add-input">
                            <label style={button} onClick={() => minusCartCount()}>-</label>
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
