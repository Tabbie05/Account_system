import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Login = ({ onToggle }) => {
  const {loading,login} = useAuth();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const handleLogin = async (e) => {
  e.preventDefault();

  const res = await login({ emailOrUsername: email, password }); 
  if (res.success) {
    console.log("Login successful:", res.data);
    alert("Login successful!");
  } else {
    alert(`Error: ${res.message}`);
  }
};



  return (
    <Box sx={{ width: "100%" }} component="form">
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Lora', serif",
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.primary,
          mt: 4,
        }}
      >
        MessageMe.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Paper
          elevation={5}
          sx={{
            width: "100%",
            maxWidth: isSmallScreen ? 340 : 500,
            p: 4,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            mb={3}
            color={theme.palette.text.primary}
          >
            Login
          </Typography>

          <Stack spacing={3}>
            <TextField
              variant="outlined"
              label="Email or Username"
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Password"
              type="password"
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
              },
            }}
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
              color: theme.palette.text.secondary,
            }}
          >
            Don’t have an account?{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                color: theme.palette.success.main,
              }}
              onClick={onToggle}
            >
              Sign Up
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
