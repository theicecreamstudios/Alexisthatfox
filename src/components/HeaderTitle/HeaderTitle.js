import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function HeaderTitle({title, variant='h2',fontFamily="BDSans !important"}) {
  return (
    <Box sx={{mb: 4, width: '100%',textAlign: 'center'}}>
      <Typography component="div" variant={variant} sx={{
        mt: 3,
        mb: 1,
        fontFamily: fontFamily,
        fontWeight: 400,
        fontStyle: 'normal',
        }}>
        {title}
      </Typography>
    </Box>
  )
}
