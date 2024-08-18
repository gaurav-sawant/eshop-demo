import React, { createContext, useContext, useReducer } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ reducer, initialValue, children }) => {
  return <ShopContext.Provider value={useReducer(reducer, initialValue)}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => useContext(ShopContext);
