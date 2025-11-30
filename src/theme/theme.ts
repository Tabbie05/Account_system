// theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f50057",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    action: {
      hover: "#e0f2f1", // hover color for inactive buttons
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    primary: {
      main: "#f6f6f7ff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#f48fb1",
      contrastText: "#000000",
    },
    success: {
      main: "#4caf50",
      contrastText: "#000000",
    },
    action: {
      hover: "#333333",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});
