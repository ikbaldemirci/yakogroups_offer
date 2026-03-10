import { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme, AppBar, Toolbar, Typography } from '@mui/material';
import { UserInfoForm } from './components/UserInfoForm';
import type { UserInfo } from './components/UserInfoForm';
import { OfferStepper } from './components/OfferStepper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleUserInfoSubmit = (info: UserInfo) => {
    setUserInfo(info);
  };

  const handleReset = () => {
    setUserInfo(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static" elevation={1}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              YakoGroups Teklif ve Seçim Portalı
            </Typography>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
          {!userInfo ? (
            <UserInfoForm onSubmit={handleUserInfoSubmit} />
          ) : (
            <OfferStepper userInfo={userInfo} onReset={handleReset} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
