import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
export const menuId = "primary-search-account-menu";
export const mobileMenuId = "primary-search-account-menu-mobile";
export const drawerWidth = 100;

export const MenuItems = [
  {
    id: 1,
    label: "Dashboard",
    Icon: SignalCellularAltIcon,
    to: "/dashboard",
  },
  {
    id: 2,
    label: "Customer",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/customers",
  },
  {
    id: 3,
    label: "Shop",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/shop",
  },
  {
    id: 4,
    label: "Account",
    Icon: SignalCellularAltIcon,
    to: "/dashboard/accounts",
  },
];
