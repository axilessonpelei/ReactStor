import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  //Добавить в values "sortedProducts, setSortedProducts"
  const values = { cart, setCart, sortedProducts, setSortedProducts };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
