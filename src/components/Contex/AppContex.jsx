import { createContext } from "react"

const AppContext = createContext({
    
    basket: {},
    setBasket: () => {}
});

export { AppContext }