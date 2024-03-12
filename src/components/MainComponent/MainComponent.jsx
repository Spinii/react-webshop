import { useState, useEffect } from "react"
import "./MainComponent.css"
import { RiSkipLeftLine, RiSkipRightLine } from "@remixicon/react";

function MainComponent(){

    const [fetchedProducts, setFetchedProducts] = useState(null);

    const [titles, setTitles] = useState([]);

    const [description, setDescription] = useState([]);

    const [images, setImages] = useState([]);

    const [coverImage, setCoverImage] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                console.log("Fetched Products:", data);

                
                const productTitles = data.products.map(product => product.title);
                const productDescription = data.products.map(product => product.description);
                const productImages = data.products.map(product => product.images);
                const firstImage = productImages.map(image => image[0]);
                setTitles(productTitles);
                setDescription(productDescription)
                setImages(productImages);
                setCoverImage(firstImage);
                console.log("Titles:", productTitles);
                console.log("Description:", productDescription);
                console.log("Images:", productImages);
                console.log("firstimage => ", firstImage)
               
                
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);



    const [productCount, setProductCount] = useState(0);

    function handlePreviousProduct(){

        setProductCount(productCount - 1)
        if(productCount === 0){
            setProductCount(5)
        }
    }

    function handleNextProduct(){

        setProductCount(productCount + 1)
        if(productCount === 5){
            setProductCount(0)
        }
    }



    return(
        <>
        <div className="main-container">
            <div onClick={() => handlePreviousProduct()} className="main-container-btn">
                <RiSkipLeftLine color="white"/>
            </div>
            { titles && 
            <div className="main-container-text">
                 <h4>{titles[productCount]}</h4>
                <p>{description[productCount]}</p>
            </div>}
            <div className="main-container-product">
                <img src={coverImage[productCount]}></img>
            </div>
            <div onClick={() => handleNextProduct()} className="main-container-btn">
                <RiSkipRightLine color="white"/>
            </div> 
        </div>
        </>
    )
}

export { MainComponent }