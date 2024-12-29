// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import HorizontalNavbar from './components/HorizontalNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import DashboardPage from './components/DashboardPage';
import FAQPage from './components/FAQPage';
import ProfilePage from './components/ProfilePage';
import OverviewPage from './components/OverviewPage'; // Moved to components folder
import CalendarPage from './components/CalendarPage'; // Moved to components folder
import SourceDestinationGraph from './components/SourceDestinationGraph'; // Moved to components folder
import ItemPage from './components/ItemPage'; // Moved to components folder
import theme from './theme'; // Importing theme for light/dark mode
import './App.css';
const App = () => {
  const [mode, setMode] = useState('light'); // Default light mode

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', height: '100vh' }}>
          {/* Horizontal Navbar with mode toggle */}
          <HorizontalNavbar onModeToggle={handleModeToggle} />

          {/* Main Content with Vertical Navbar */}
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <VerticalNavbar />

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                p: 3,
                marginLeft: 0,
                paddingTop: '80px',
                overflow: 'auto',
              }}
            >
              <Routes>
                {/* Define routes for each page */}
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                
                {/* Pages for Dashboard Category */}
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/item3" element={<ItemPage />} />
                <Route path="/item4" element={<ItemPage />} />
                
                {/* Pages for Network Category */}
                <Route path="/sourcedest" element={<SourceDestinationGraph/>} />
                <Route path="/item6" element={<ItemPage />} />
                <Route path="/item7" element={<ItemPage />} />
                <Route path="/item8" element={<ItemPage />} />
                
                {/* Pages for Category 3 */}
                <Route path="/item9" element={<ItemPage />} />
                <Route path="/item10" element={<ItemPage />} />
                <Route path="/item11" element={<ItemPage />} />
                <Route path="/item12" element={<ItemPage />} />
                
                {/* Pages for Category 4 */}
                <Route path="/item13" element={<ItemPage />} />
                <Route path="/item14" element={<ItemPage />} />
                <Route path="/item15" element={<ItemPage />} />
                <Route path="/item16" element={<ItemPage />} />
                
                {/* Pages for Category 5 */}
                <Route path="/item17" element={<ItemPage />} />
                <Route path="/item18" element={<ItemPage />} />
                <Route path="/item19" element={<ItemPage />} />
                <Route path="/item20" element={<ItemPage />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
