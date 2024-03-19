import { Link } from "react-router-dom"
import "../Pages/Shop.css"
import "./CartProduct.css"


function CartProduct({product}){

    
    const discountPrice = product.price - (product.price * product.discountPercentage / 100).toFixed(2);

    const total = (discountPrice * product.quantity).toFixed(2);


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
                        <h5 className="quantity"><strong>Product Quantity: </strong>{product.quantity}</h5>
                        <h5><strong>Discount Percentage: </strong>{product.discountPercentage}%</h5>
                    </div>
                </div>
            </div>
            <div className="price-info">
                <h4>{product.price}€</h4>
                <h2>{discountPrice}€</h2>
            </div>
            <div className="total-price">
                <h2>{total}€</h2>
            </div>
            </div>
            <div className="cart-line-light"></div>
        </div>
    )
}


export { CartProduct }