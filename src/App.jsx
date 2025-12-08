// App.jsx
import React from "react";
import { CssBaseline, Box, Button } from "@mui/material";
import AuthPage from "./page/AuthPage";
import { useThemeContext } from "./Context/ThemeContext";

const App = () => {
  const theme = useThemeContext();

  return (
    <>
      <CssBaseline />
      <AuthPage />

      {/* Toggle Theme Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 100,
          right: 20,
        }}
      >
        <Button variant="contained" onClick={theme.toggleTheme}>
          Toggle Theme
        </Button>
      </Box>
    </>
  );
};

export default App;
