import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import { FilterBox } from "../subComponents/FilterBox";
import { RiCheckboxBlankFill } from "@remixicon/react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allCheckedCategories, setAllCheckedCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        // console.log("Fetched Products:", data.products);
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (allCheckedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        allCheckedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
    }
  }, [allCheckedCategories, products]);

  function handleCheckBoxChange(category) {
    if (allCheckedCategories.includes(category)) {
      const updatedCheckedCategories = allCheckedCategories.filter(
        (item) => item !== category
      );
      setAllCheckedCategories(updatedCheckedCategories);
    } else {
      setAllCheckedCategories([...allCheckedCategories, category]);
    }
  }

  function resetFilteredProducts() {
    setFilteredProducts(products);
    setAllCheckedCategories([]);
  }

  return (
    <>
      <div className="main-shop-container">
        <FilterBox
          products={products}
          handleCheckBoxChange={handleCheckBoxChange}
          resetFilteredProducts={resetFilteredProducts}
          allCheckedCategories={allCheckedCategories}
        />
        <div className="shop-left">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div key={product.id} className="shopProduct">
                <h3>{product.title}</h3>
                <img src={product.thumbnail}></img>

                <h4>{product.price}€</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export { Shop };
