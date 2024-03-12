import { Outlet } from "react-router-dom"



function Product(){

    return(
        <>
        <div>Product Page</div>
        <Outlet />
        </>
    )
}

export { Product }