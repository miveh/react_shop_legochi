import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout, DashboardLayout } from "../components";
import { lazy } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home";
import Cart from "../pages/cart/Cart";
import AdminLogin from "../pages/dashboard/AdminLogin";
// const Dashboard = Loadable(lazy(() => import("../page/dashboard/Dashboard")));

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "customer",
        element: <div>cutomers</div>,
      },
      {
        path: "products",
        element: <div>products</div>,
      },
      {
        path: "accounts",
        element: <div>orders</div>,
      },
    ],
  },
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "wishlist",
        element: <>wish list</>,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "login",
    element: <AdminLogin />,
  },
]);
