import { useEffect, useState } from "react";
import "../MainComponent/MainComponent.css";
import "./PopularProducts.css";
import { Link } from "react-router-dom";
import { PopularProductCard } from "./PopularProductCard";

function PopularProducts() {
  const [defineData, setDefineData] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=8&skip=60&select=title,price,thumbnail,id,brand"
        );
        const data = await response.json();
        console.log("data =>", data);
        setDefineData(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchPopularProducts();
  }, []);

  return (
    <>
      <div className="popular-products">
        <h2>Popular Products</h2>
        <div className="products-container">
          {defineData.map((item) => (
            <PopularProductCard defineData={defineData} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export { PopularProducts };
