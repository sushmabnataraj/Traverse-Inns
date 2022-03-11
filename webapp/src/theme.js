import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Quicksand",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "26px",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "20px",
    },
    h4: {
      fontSize: "14px",
    },
    h5: {
      fontSize: "12px",
    },
    h6: {
      fontSize: "10px",
    },
    h7: {
      fontSize: "8px",
    },
    subtitle2: {
      color: "#808080",
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        padding: "0px",
      },
    },
    MuiSvgIcon: {
      root: {
        fill: "initial",
      },
    },
    MuiButton: {
      root: {
        padding: "10px !important",
        boxShadow: "none",
        borderRadius: "20px",
        minWidth: "150px",
      },
      startIcon: {
        margin: "0px !important",
      },
    },
    MuiPopover: {
      paper: {
        width: "15%",
        borderRadius: "12px",
        marginTop: "3.5%",
        marginLeft: "-4.5%",
      },
    },
    MuiAppBar: {
      root: {
        padding: "5px 0px",
      },
    },
    MuiTab: {
      root: {
        padding: "20px",
        borderBottom: "1px solid #ccc",
      },
    },
  },
});

export default theme;