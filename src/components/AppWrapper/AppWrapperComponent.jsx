import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainComponent } from "../MainComponent/MainComponent";



function AppWrapperComponent(){


    return(
        <>
            <Header />
            <MainComponent />
            <Footer />
        </>
    )
}


export { AppWrapperComponent }