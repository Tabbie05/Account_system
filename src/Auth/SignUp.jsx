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

const SignUp = ({ onOtpSent, onToggle }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Add missing states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { sendOtp, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();


    const res = await sendOtp(email);
    if (res.success) {
      console.log("OTP sent successfully");
     onOtpSent({email,  firstName,lastName, username, password });


    } else {
      console.error("Error sending OTP:", res.message);
      alert(`Error: ${res.message}`);
    }
  };

  return (
    <Box sx={{ width: "100%" }} component="form" onSubmit={handleSubmit}>
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
            Sign Up
          </Typography>

          <Stack spacing={3}>
            <TextField
              variant="outlined"
              label="First Name"
              required
              fullWidth
              onChange={(e) => setFirstName(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Last Name"
              required
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Username"
              required
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Email Address"
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
            disabled={loading}
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
              },
            }}
            type="submit"
          >
            {loading ? "Sending OTP..." : "Sign Up"}
          </Button>

          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Already have an account?{" "}
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                color: theme.palette.success.main,
              }}
              onClick={onToggle}
            >
              Login
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
