import { useEffect, useState } from "react";
import "../MainComponent/MainComponent.css"
import "./PopularProducts.css"
import { Link } from "react-router-dom";



function PopularProducts(){

    const [defineData, setDefineData] = useState([]);



    useEffect(() => {
        const fetchPopularProducts = async () => {
            try{
                const response = await fetch('https://dummyjson.com/products?limit=6&skip=6&select=title,price,thumbnail,id')
                const data = await response.json();
                console.log("data =>", data);
                setDefineData(data.products);
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchPopularProducts()
    }, []);


    return(
        <>
        <div className="popular-products">
            <h2>Popular Products</h2>
           <div className="products-container">
                {defineData.map(item => <div className="product" key={item.id}>
                    <img src={item.thumbnail}></img>
                    <h4>{item.title}</h4>
                    <h6>{item.price}€</h6>
                    <Link to={"/product/" + item.id}><button className="mainBtn mainBtnLight">Buy Product</button></Link>
                </div>)}
            </div>
        </div> 
        </>
    )
}


export { PopularProducts }