import { createContext } from "react";

const AppContext = createContext({
  basket: {},
  setBasket: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  wishlist: {},
  setWishlist: () => {},
});

export { AppContext };
