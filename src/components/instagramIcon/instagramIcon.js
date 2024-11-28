import React from 'react';
import Box from '@mui/material/Box';

const InstagramIcon = () => {
  return (
    <Box
      sx={{
        width: 35, // Outer circle size
        height: 35,
        border: '2px solid #727272', // Black border
        borderRadius: '20%', // Makes it a circle
        position: 'relative', // For absolute positioning of the dot
        display: 'flex', // Center the inner circle
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Inner Circle */}
      <Box
        sx={{
          width: 20, // Inner circle size
          height: 20,
          border: '2px solid #727272', // Black border
          borderRadius: '50%', // Makes it a circle
        }}
      />
      {/* Dot */}
      <Box
        sx={{
          width: 8, // Dot size
          height: 8,
          border: '2px solid #727272',
          borderRadius: '50%', // Makes it a circle
          position: 'absolute',
          top: 0, // Adjust position to top-right
          right: 3,
        }}
      />
    </Box>
  );
};

export default InstagramIcon;
