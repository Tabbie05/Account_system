import React from 'react';
import { Container, CssBaseline, Typography, Button } from '@mui/material';
import { useThemeContext } from './Context/ThemeContext';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const theme = useThemeContext();
  
  const handleToggleTheme = () => {
    theme.toggleTheme();
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Sidebar />
        <Button onClick={handleToggleTheme}>Toggle</Button>
      </Container>
    </>
  );
};

export default App;

