// src/components/VerticalNavbar.js
import React from 'react';
import { Drawer, List, ListItem, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const VerticalNavbar = () => {
  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper', // Dark mode background for vertical navbar
          color: 'text.primary',
          paddingTop: '80px',
          overflowY: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            width: '6px', // Set the scrollbar width
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '4px',
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ paddingLeft: 2 }}>
        {/* Dashboard Category */}
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Dashboard</Typography>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/overview"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Overview
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/calendar"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Calendar
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item3"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 3
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item4"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 4
            </Button>
          </ListItem>
        </List>

        {/* Network Category */}
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Network</Typography>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/sourcedest"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Source-Dest Graph
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item6"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 6
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item7"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 7
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item8"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 8
            </Button>
          </ListItem>
        </List>

        {/* Category 3 */}
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Category 3</Typography>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item9"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 9
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item10"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 10
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item11"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 11
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item12"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 12
            </Button>
          </ListItem>
        </List>

        {/* Category 4 */}
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Category 4</Typography>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item13"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 13
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item14"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 14
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item15"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 15
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item16"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 16
            </Button>
          </ListItem>
        </List>

        {/* Category 5 */}
        <List>
          <ListItem>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Category 5</Typography>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item17"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 17
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item18"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 18
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item19"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 19
            </Button>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <Button
              component={Link}
              to="/item20"
              fullWidth
              sx={{
                padding: '8px 20px',
                justifyContent: 'flex-start',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                },
              }}
            >
              Item 20
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default VerticalNavbar;
