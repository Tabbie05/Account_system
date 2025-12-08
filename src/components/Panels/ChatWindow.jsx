import React, { useState } from 'react';
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  TextField,
  InputAdornment,
  Button,
  useTheme,
} from '@mui/material';
import VideocamTwoToneIcon from '@mui/icons-material/VideocamTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import SendIcon from '@mui/icons-material/Send';
import { toast, ToastContainer } from 'react-toastify';

const ChatWindow = ({
  name,
  avatarUrl,
  status = 'Online',
  currentUser,
  messages,
  onSendMessage,
}) => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [messagearr, setmessagearr] = useState([]);

  const handleSend = () => {
    setmessagearr([...messagearr, input]);

    if (!input.trim()) {
      toast.error('You cannot send an empty message ❌');
      return;
    }

    onSendMessage(input.trim());

    toast.success('Message Sent! 🎉', {
      position: 'bottom-right',
      autoClose: 2000,
    });

    setInput('');
  };

  console.log(messagearr);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: theme.palette.background.default,
        borderLeft: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={avatarUrl} alt={name} />
          <Box>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: theme.palette.text.primary,
                lineHeight: 1.2,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: theme.palette.success.main,
                fontWeight: '600',
                lineHeight: 1.2,
              }}
            >
              {status}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Tooltip title="Video Call">
            <IconButton
              sx={{
                color: theme.palette.success.main,
                '&:hover': { bgcolor: theme.palette.action.hover },
              }}
            >
              <VideocamTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Details">
            <IconButton
              sx={{
                color: theme.palette.success.main,
                '&:hover': { bgcolor: theme.palette.action.hover },
              }}
            >
              <InfoTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* MESSAGES AREA */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {messages.map((msg) => {
          const isMe = msg.sender === currentUser;
          return (
            <Box
              key={msg.id}
              sx={{
                display: 'flex',
                flexDirection: isMe ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              {msg.avatar && (
                <Avatar
                  src={msg.avatar}
                  alt={msg.sender}
                  sx={{ width: 30, height: 30 }}
                />
              )}
              <Box
                sx={{
                  bgcolor: isMe
                    ? theme.palette.success.main
                    : theme.palette.background.paper,
                  color: isMe
                    ? theme.palette.success.contrastText
                    : theme.palette.text.primary,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: '70%',
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'right',
                    mt: 0.5,
                    color: isMe
                      ? theme.palette.success.contrastText
                      : theme.palette.text.secondary,
                  }}
                >
                  {msg.time}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          flexShrink: 0,
          bgcolor: theme.palette.background.paper,
        }}
      >
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSend();
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={handleSend}
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ textTransform: 'none' }}
                  startIcon={<SendIcon />}
                >
                  Send
                </Button>
              </InputAdornment>
            ),
          }}
        />
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default ChatWindow;
