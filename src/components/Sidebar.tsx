import React, { FC, useState } from "react";
import { Box, Stack, IconButton, Tooltip, useTheme } from "@mui/material";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import AudiotrackTwoToneIcon from "@mui/icons-material/AudiotrackTwoTone";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const theme = useTheme();

  const [active, setActive] = useState<number | null>(null);

  const icons = [
    { id: 0, title: "Website", icon: <LanguageTwoToneIcon /> },
    { id: 1, title: "Chat", icon: <MessageRoundedIcon /> },
    { id: 2, title: "Video", icon: <VideocamTwoToneIcon /> },
    { id: 3, title: "Audio", icon: <AudiotrackTwoToneIcon /> },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 60,
        height: "100vh",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 2,
      }}
    >
      {/* Logo / Top Circles */}
      <Box sx={{ position: "relative", width: 20, height: 20, mb: 2,mr:1 }}>
        {[0, 1].map((i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: 20,
              height: 20,
              borderRadius: "50%",
              border: "3px solid #4caf50",
              left: i * 10,
              top: 0,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          borderRadius: "50%",
          bgcolor: "#4caf50",
          width: 30,
          height: 30,
          mb: 3,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          
        }}
      >T</Box>
      <Box
        sx={{
          width: "70%",
          borderBottom: "1px solid gray",
          mb: 3,
        }}
      />

      {/* Sidebar Icons */}
      <Stack spacing={2} alignItems="center">
        {icons.map((item) => {
          const isActive = active === item.id;
          return (
            <Tooltip key={item.id} title={item.title} placement="right">
              <IconButton
                onClick={() => setActive(item.id)}
                sx={{
                  color: isActive ? "#ffffff" : "#4caf50",
                  bgcolor: isActive ? "#4caf50" : "transparent",
                  "&:hover": {
                    bgcolor: isActive ? "#4caf50" : "#e0f2f1",
                  },
                  borderRadius: "50%",
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
