import React from "react";
import { CssBaseline, Box, Button } from "@mui/material";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/Panels/ChatPanel";
import ChatWindow from "./components/Panels/ChatWindow";
import { useThemeContext } from "./Context/ThemeContext";

const App: React.FC = () => {
  const theme = useThemeContext();

  const handleToggleTheme = () => {
    theme.toggleTheme();
  };
             const messages = [
  { id: 1, sender: "Alice", text: "Hello!", avatar: "https://i.pravatar.cc/150?img=1", time: "15:42" },
  { id: 2, sender: "Me", text: "Hi Alice!", time: "15:43" },
  // more messages
];

  return (
    <>
      <CssBaseline />

      <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
        <Box sx={{ flex: 1, marginLeft: "60px", display: "flex" }}>
          <Box sx={{ flex: 1, borderLeft: "1px solid #ccc" }}>
            <ChatPanel />
          </Box>
          <Box sx={{ flex: 2, borderLeft: "1px solid #ccc" }}>


<ChatWindow
  name="Travis Barker"
  avatarUrl="https://i.pravatar.cc/150?img=10"
  currentUser="Me"
  messages={messages}
  onSendMessage={(msg) => console.log("Send message:", msg)}
/>;

          </Box>
        </Box>

        <Sidebar />
      </Box>

      {/* Toggle Theme Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 100,
          right: 20,
        }}
      >
        <Button variant="contained" onClick={handleToggleTheme}>
          Toggle Theme
        </Button>
      </Box>
    </>
  );
};

export default App;
