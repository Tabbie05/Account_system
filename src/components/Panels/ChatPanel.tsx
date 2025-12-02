import React from 'react';
import {
  Avatar,
  TextField,
  Box,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';

function ChatPanel() {
  const people = [
    { id: 1, name: "Alex Carter", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Mia Johnson", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Noah Smith", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, name: "Sophia Lee", avatar: "https://i.pravatar.cc/150?img=4" },
    { id: 5, name: "Ethan Walker", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 6, name: "Isabella Davis", avatar: "https://i.pravatar.cc/150?img=6" },
    { id: 7, name: "Liam Brown", avatar: "https://i.pravatar.cc/150?img=7" },
    { id: 8, name: "Olivia Garcia", avatar: "https://i.pravatar.cc/150?img=8" },
    { id: 9, name: "James Wilson", avatar: "https://i.pravatar.cc/150?img=9" },
    { id: 10, name: "Ava Martinez", avatar: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Bold Heading */}
      <Box sx={{ p: 2, mb:-2 }}>
        <Typography variant="h6" fontWeight="bold">
          MESSAGES
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ p: 2 ,mb:-2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search or start new chat"
          size="small"
        />
      </Box>

      {/* People List / Chat list */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <List>
          {people.map((person) => (
            <ListItem key={person.id} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#6bee6fff", // green on hover
                    boxShadow: "0 2px 5px rgba(0,128,0,0.3)", // subtle green shadow
                  },
                }}
              >
                <Avatar src={person.avatar} alt={person.name} sx={{ mr: 2 }} />
                <ListItemText
                  primary={person.name}
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default ChatPanel;
