import { useState } from "react"
import "./MainComponent.css"

function MainComponent(){

    const products = [
        {
            title: "Title 1",
            description: "Description 1"
        },
        {
            title: "Title 2",
            description: "Description 2"
        },
        {
            title: "Title 3",
            description: "Description 3"
        },
        {
            title: "Title 4",
            description: "Description 4"
        }
    ]

    const [productCount, setProductCount] = useState(0);

    function handlePreviousProduct(){

        setProductCount(productCount - 1)
        if(productCount === 0){
            setProductCount(3)
        }
    }

    function handleNextProduct(){

        setProductCount(productCount + 1)
        if(productCount === 3){
            setProductCount(0)
        }
    }

    console.log(products[1].title);



    return(
        <>  
        <div className="main-container">
            <div onClick={() => handlePreviousProduct()} className="main-container-btn">
                Prev
            </div>
            <div className="main-container-text">
                <h4>{products[productCount].title}</h4>
                <p>{products[productCount].description}</p>
            </div>
            <div className="main-container-product">
                <h2>Product Image</h2>
            </div>
            <div onClick={() => handleNextProduct()} className="main-container-btn">
                Next
            </div>
        </div>
        </>
    )
}

export { MainComponent }