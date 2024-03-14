import { Link } from "react-router-dom"
import "../Pages/Shop.css"
import "./CartProduct.css"

function CartProduct({product}){

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="all-info">
            <div className="cart-info">
                <div className="cart-info-box">
                    <Link to={`/product/${product.id}`}>
                        <div className="thumbnail-container">
                            <img src={product.thumbnail}></img>
                        </div>
                    </Link>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <h5><strong>Product Nr: </strong>{product.id}</h5>
                        <h5><strong>Product Quantity: </strong>{product.quantity}</h5>
                        <h5><strong>Discount Percentage: </strong>{product.discountPercentage}%</h5>
                    </div>
                </div>
            </div>
            <div className="price-info">
                <h4>{product.discountedPrice}€</h4>
                <h2>{product.price}€</h2>
            </div>
            <div className="total-price">
                <h2>{product.total}€</h2>
            </div>
            </div>
            <div className="cart-line-light"></div>
        </div>
    )
}


export { CartProduct }