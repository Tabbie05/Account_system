import React, { useState } from 'react';
import { Box, Stack, IconButton, Tooltip, useTheme } from '@mui/material';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import AudiotrackTwoToneIcon from '@mui/icons-material/AudiotrackTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const theme = useTheme();
  const [active, setActive] = useState(null);

  const icons = [
    { id: 0, title: 'Website', icon: <LanguageTwoToneIcon /> },
    { id: 1, title: 'Chat', icon: <MessageRoundedIcon /> },
    { id: 2, title: 'Video', icon: <VideocamTwoToneIcon /> },
    { id: 3, title: 'Audio', icon: <AudiotrackTwoToneIcon /> },
  ];

  const bottomIcons = [
    { id: 4, title: 'Settings', icon: <SettingsIcon /> },
    { id: 5, title: 'Logout', icon: <LogoutIcon /> },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 60,
        height: '100vh',
        bgcolor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 2,
      }}
    >
      {/* Logo / Top Circles */}
      <Box sx={{ position: 'relative', width: 20, height: 20, mb: 2, mr: 1 }}>
        {[0, 1].map((i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: `3px solid ${theme.palette.success.main}`,
              left: i * 10,
              top: 0,
            }}
          />
        ))}
      </Box>

      {/* Top Circle Logo */}
      <Box
        sx={{
          borderRadius: '50%',
          bgcolor: theme.palette.success.main,
          width: 30,
          height: 30,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.palette.success.contrastText,
          fontWeight: 'bold',
        }}
      >
        T
      </Box>

      {/* Divider */}
      <Box
        sx={{
          width: '70%',
          borderBottom: `1px solid ${theme.palette.divider}`,
          mb: 3,
        }}
      />

      {/* Main Sidebar Icons */}
      <Stack spacing={2} alignItems="center">
        {icons.map((item) => {
          const isActive = active === item.id;
          return (
            <Tooltip key={item.id} title={item.title} placement="right">
              <IconButton
                onClick={() => setActive(item.id)}
                sx={{
                  color: isActive
                    ? theme.palette.success.contrastText
                    : theme.palette.success.main,
                  bgcolor: isActive
                    ? theme.palette.success.main
                    : 'transparent',
                  '&:hover': {
                    bgcolor: isActive
                      ? theme.palette.success.main
                      : theme.palette.action.hover,
                  },
                  borderRadius: '50%',
                }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          );
        })}
      </Stack>

      {/* Bottom Icons */}
      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {bottomIcons.map((item) => {
          const isActive = active === item.id;
          return (
            <Tooltip key={item.id} title={item.title} placement="right">
              <IconButton
                onClick={() => setActive(item.id)}
                sx={{
                  color: isActive
                    ? theme.palette.success.contrastText
                    : theme.palette.success.main,
                  bgcolor: isActive
                    ? theme.palette.success.main
                    : 'transparent',
                  '&:hover': {
                    bgcolor: isActive
                      ? theme.palette.success.main
                      : theme.palette.action.hover,
                  },
                  borderRadius: '50%',
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
