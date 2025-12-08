// theme.js
import { createTheme } from "@mui/material/styles";

const successColor = {
  main: "#4caf50",
  light: "#66bb6a",
  dark: "#388e3c",
  contrastText: "#fff",
};

// ---------------- LIGHT THEME ----------------
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f7fdf8",
      paper: "#ffffff",
    },
    primary: successColor,
    secondary: {
      main: "#81c784",
      contrastText: "#fff",
    },
    success: successColor,
    action: {
      hover: "rgba(76, 175, 80, 0.1)",
    },
    text: {
      primary: "#0f2815",
      secondary: "#507b58",
    },
    divider: "rgba(76, 175, 80, 0.2)",
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(76, 175, 80, 0.4)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: successColor.main,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: successColor.main + " !important",
          },
          "&.Mui-focused input": {
            color: successColor.main + " !important", // text color when typing
          },
        },
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #f7fdf8 inset !important",
            WebkitTextFillColor: "#0f2815 !important",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: successColor.main + " !important", // label color when focused
          },
        },
      },
    },
  },
});

// ---------------- DARK THEME ----------------
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0d110e",
      paper: "#151a16",
    },
    primary: successColor,
    secondary: {
      main: "#66bb6a",
      contrastText: "#000",
    },
    success: successColor,
    action: {
      hover: "rgba(76,175,80,0.18)",
    },
    text: {
      primary: "#e6ffe9",
      secondary: "#a5d6a7",
    },
    divider: "rgba(102, 187, 106, 0.25)",
  },

  components: {
    MuiPaper: {
      styleOverrides: { root: { borderRadius: 8 } },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(102, 187, 106, 0.4)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: successColor.light,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: successColor.main + " !important",
          },
          "&.Mui-focused input": {
            color: "#e6ffe9 !important", // typing text in dark
          },
        },
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #151a16 inset !important",
            WebkitTextFillColor: "#e6ffe9 !important",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: successColor.main + " !important",
          },
        },
      },
    },
  },
});
