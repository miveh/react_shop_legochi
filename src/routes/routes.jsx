import { createBrowserRouter } from "react-router-dom";
import { CustomerLayout, DashboardLayout } from "../components";
import { lazy } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home";
import Cart from "../pages/cart/Cart";
import AdminLogin from "../pages/dashboard/AdminLogin";
import DashboardProducts from "../pages/dashboard/DashboardProducts";
import Accounnt from "../pages/profile/Accounnt";
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
        path: "pricing",
        element: <div>pricing</div>,
      },
      {
        path: "products",
        element: <DashboardProducts />,
      },
      {
        path: "orders",
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
        path: "/account",
        element: <Accounnt />,
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
    path: "admin-login",
    element: <AdminLogin />,
  },
]);
