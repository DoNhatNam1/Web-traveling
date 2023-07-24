import React, { useState, createContext } from "react";

// import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  // const [selectedPackage, setSelectedPackage] = useState(null);
  
  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        // selectedPackage,
        // setSelectedPackage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};