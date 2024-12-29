// src/components/HorizontalNavbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Typography, Switch } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';

const HorizontalNavbar = ({ onModeToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: 'background.paper' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or Heading */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'text.primary' }}>
          My App
        </Typography>

        {/* Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: 1, backgroundColor: 'background.default' }}>
          <IconButton sx={{ color: 'text.primary' }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/home" style={{ marginRight: '15px', color: 'text.primary', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ marginRight: '15px', color: 'text.primary', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ marginRight: '15px', color: 'text.primary', textDecoration: 'none' }}>Contact</Link>

          {/* Mode Toggle */}
          <IconButton onClick={onModeToggle}>
            <Brightness4Icon sx={{ display: { xs: 'none', sm: 'inline' } }} />
            <Brightness7Icon sx={{ display: { xs: 'none', sm: 'inline' } }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalNavbar;
