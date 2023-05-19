// ? Import function to create Material UI Theme
import { createTheme } from "@mui/material/styles";

// ? Create Dark & Light Theme For Website
export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#171717",
    },

    primary: {
      main: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },
      defaultProps: {
        color: "primary",
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "primary",
          fontSize: "1rem",
        },
      },
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "primary.main",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

