import { React, useState } from "react"
import "./Subscribe.css"
import "../MainComponent/MainComponent.css"



function Subscribe(){

    const regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;

    const placehodler = "someone@gmail.com";

    const [userEmail, setUserEmail] = useState("");

    const [validation, setValidaiton] = useState("");

    function handleUserEmail(event){

        setUserEmail(event.target.value)
    }


    function handleSubscription(){

        if(userEmail === ""){
            setValidaiton("Please fill out email field!")
        }
        else if(!regex.test(userEmail)){
            setValidaiton("Please enter a valid email!")
        }
        else{
            window.alert("Thank you for subscribing")
        }
    }


    return(
        <>
            <div className="main-container-subscribe">
                <div className="image-container">
                    <img src="src\assets\subscribeImage.jpg"></img>
                </div>
                <div className="subscribe-container">
                    <h2>Subscribe to our Newsletter</h2>
                    <p>Keep up with the latest news and products from our shop subsrcibing to our newsletter</p>
                    <div className="input">
                        <label style={{color: "red"}}>{validation}</label>
                        <input onChange={(event) => handleUserEmail(event)} placeholder={placehodler}></input>
                        <button onClick={() => handleSubscription()} className="mainBtn">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export { Subscribe }