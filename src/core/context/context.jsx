import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  //Добавить в values "sortedProducts, setSortedProducts"
  const values = { cart, setCart, products, setProducts };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
