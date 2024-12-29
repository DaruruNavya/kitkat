// src/components/SearchBar.js
import React, { useState } from 'react';
import { Box, InputBase, IconButton, List, ListItem, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [items] = useState(['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Peach']); // Sample data

  const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 1, width: '100%' }}>
        <IconButton sx={{ color: 'black' }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>

      {query && (
        <List sx={{ marginTop: 2, width: '100%' }}>
          {filteredItems.map((item, index) => (
            <ListItem key={index} sx={{ padding: 1, cursor: 'pointer' }}>
              <Typography variant="body1">{item}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
