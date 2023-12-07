import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
export const menuId = "primary-search-account-menu";
export const mobileMenuId = "primary-search-account-menu-mobile";
export const drawerWidth = 100;

export const settings = ["Profile", "Dashboard", "Logout"];

export const MenuItems = [
  {
    id: 1,
    label: "Dashboard",
    Icon: SignalCellularAltIcon,
    to: "/dashboard",
  },
  {
    id: 2,
    label: "Products",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/products",
  },
  {
    id: 3,
    label: "Pricing",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/pricing",
  },
  {
    id: 4,
    label: "Ordess",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/orders",
  },
];
