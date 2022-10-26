// ? Import function to create Material UI Theme
import { createTheme } from "@mui/material/styles";

// ? Create Dark & Light Theme For Website
export const theme = createTheme({
  palette: {
    primary: {
      main: "#023020",
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
        size: "small",
        variant: "outlined",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
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
        variant: "contained",
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
        variant: "outlined",
        size: "small",
      },
    },
  },
});

export const landingPageTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
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
        variant: "contained",
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});
