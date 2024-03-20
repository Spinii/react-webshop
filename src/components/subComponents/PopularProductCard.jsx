import { Link } from "react-router-dom";
import "./PopularProductCard.css";

const PopularProductCard = ({ defineData, item }) => {
  return (
    <>
      <div key={defineData.id} className="product-card">
        <div className="product-thumbnail">
          <img src={item.thumbnail}></img>
        </div>
        <h3 className="card-title">{item.title}</h3>
        <h5>
          <strong>Brand:</strong> {item.brand}
        </h5>
        <h3 className="card-price">{item.price}€</h3>
        <Link
          style={{ width: "100%" }}
          key={item.id}
          to={`/product/${item.id}`}
        >
          <button className="card-btn">Buy Now</button>
        </Link>
      </div>
    </>
  );
};

export { PopularProductCard };
