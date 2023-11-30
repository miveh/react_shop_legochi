import { createBrowserRouter } from "react-router-dom";
// import { DashboardLayout, Loadable } from "../components";
import { lazy } from "react";

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
        element: <div>cusromers</div>,
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
]);
