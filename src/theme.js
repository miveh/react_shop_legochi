import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontSize: "14px",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h3: {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h4: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "137.5%",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "137.5%",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "137.5%",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "175%",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "157%",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "157%",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "166%",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "250%",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
  },

  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    neutral: {
      100: "#F3F4F6",
      300: "#D1D5DB",
      400: "#9CA3AF",
      900: "#111827",
    },
    background: {
      default: "#e5e5e5",
      paper: "#fff",
    },
  },
});

export default theme;
