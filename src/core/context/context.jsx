import { createContext, useState } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const values = { cart, setCart };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
