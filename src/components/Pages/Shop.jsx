import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css"
import { FilterBox } from "../subComponents/FilterBox";

function Shop(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=0');
                const data = await response.json();
                console.log("Fetched Products:", data.products);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);


    return(
            <>
            <div className="main-shop-container">
                <FilterBox products={products}/>
                <div className="shop-left">
                    {products.map(product => <Link key={product.id} to={`/product/${product.id}`}>
                        <div key={product.id} className="shopProduct">
                            <img src={product.thumbnail}></img>
                            <h3>{product.title}</h3>
                            <h4>{product.price}€</h4>
                        </div></Link>)}
                </div> 
            </div> 
            </>
    )
}


export { Shop }