import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./SingleProduct.css"
import "../subComponents/PopularProducts.css"
import { RiArrowLeftCircleFill, RiLoader2Fill, RiStarFill } from '@remixicon/react';
import { AppContext } from '../Contex/AppContex';

const SingleProduct = () => {

    
    const navigate = useNavigate()

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {basket, setBasket} = useContext(AppContext)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                // console.log("data =>", data);
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

    const [cartCount, setCartCount] = useState(1);


    function minusCartCount(){
        if(cartCount > 0){
            setCartCount(cartCount - 1)
        }
    }

    function addToBasketHandler() {
        
        setBasket(prevBasket => {
            const updatedProducts = [...prevBasket.products, product];
            return { ...prevBasket, products: updatedProducts };
        });
    }
    
    console.log(basket)



    return (
        <div className='main'>
            {product ? 
            <div className='main-product-container'>
                <div className="left-side">
                <RiArrowLeftCircleFill onClick={() => navigate(-1)} size={"3rem"} color='white' style={{cursor: "pointer"}} />
                    <div className="left-side-images">
                        <div className="small-images">
                            {product.images.map((image, index) => <div className='img-container'><img onClick={() => handleCurrrentIndex(index)} className='small-image' key={index} src={image}></img></div> )}
                        </div>
                        <div className="big-images">
                            <img className='big-image' src={product.images[currentIndex]}></img>
                        </div>
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
                            <input value={cartCount} style={{minWidth: "50px"}}></input>
                            <label onClick={() => setCartCount(cartCount + 1)}>+</label>
                        </div>
                        <div className="btns">
                            <button className='mainBtn mainBtnLight' onClick={() => addToBasketHandler()}>Add To Cart</button>
                            <Link to="/cart"><button className='mainBtn mainBtnLight'>Go To Cart</button></Link>
                        </div>
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
