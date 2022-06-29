// ? Import function to create Material UI Theme
import { createTheme } from "@mui/material/styles";

// ? Create Dark & Light Theme For Website
export const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
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
        },
      },
      defaultProps: {
        color: "primary",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#311b92",
        },
      },
    },
  },
});

// ? Create Dark Theme For Website
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#192734",
      paper: "#15202B",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
    },
  },
});
