import { Main } from "../../ui/pages/main/Main.jsx";
import { createBrowserRouter } from "react-router-dom";
import { Cart } from "../../ui/pages/cart/Cart.jsx";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

const router = createBrowserRouter(routes);

export { router };
