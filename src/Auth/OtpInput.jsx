import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import api from "../api/authApi";
import useAuth from "../hooks/useAuth";


const OtpInput = ({signupData , goBack }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };
  const {loading,verifyOtp} = useAuth();

  const onVerify = async () => {
    const finalOtp = otp.join("");
   const { firstName, lastName, username, email, password } = signupData;
const res = await verifyOtp({
  firstName,
  lastName,
  username,
  email,
  password,
  otp: finalOtp
});


    if (res.success) {
      console.log("OTP verified and user registered:", res.data);
      alert("Registration successful!");
      goBack();
    } else {
      console.error("Error verifying OTP:", res.message);
      alert(`Error: ${res.message}`);
    }

  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (newOtp[index] !== "") {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        const prevIndex = index - 1;
        newOtp[prevIndex] = "";
        setOtp(newOtp);
        const prevInput = document.getElementById(`otp-${prevIndex}`);
        prevInput?.focus();
      }
    }
  };

  const finalOtp = otp.join("");
  console.log("Entered OTP:", finalOtp);

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
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
            maxWidth: isSmallScreen ? 340 : 400,
            p: 4,
            backgroundColor: theme.palette.background.paper,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, color: theme.palette.text.primary }}
          >
            Verify OTP
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mb={4}>
            {otp.map((val, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{
                  width: 50,
                  height: 50,
                  fontSize: 24,
                  textAlign: "center",
                  borderRadius: 8,
                  border: `2px solid ${theme.palette.success.main}`,
                  outline: "none",
                  backgroundColor: theme.palette.background.default,
                }}
              />
            ))}
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.success.dark,
              },
            }}
            onClick={onVerify}
            disabled={otp.includes("")}

          >
             {loading ? "Verifying..." : "Verify OTP & Register"}
          </Button>

          <Typography
            sx={{
              mt: 2,
              textAlign: "center",
              color: theme.palette.text.secondary,
            }}
          >
            Didn’t receive OTP?{" "}
            <Button
              component="span"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                color: theme.palette.success.main,
              }}
              onClick={goBack}
            >
              Resend OTP
            </Button>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default OtpInput;
