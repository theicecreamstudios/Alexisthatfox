import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const CardFlip = ({item}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <Box>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* Front of card */}
                <Box 
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}>
                <Card sx={{ background: '#1E310A', color: 'white', borderRadius: 0, py: 3, px: 3  }}>
                      <CardContent sx={{height: 180, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 3}}>
                        <Typography variant="h5" component="div" 
                        sx={{ 
                          width: {xs: 'initial', md: 170},
                          textAlign: 'center',
                          fontSize: {xs: '1rem', sm:'1.5rem'},
                          fontFamily: "Kollektif", fontWeight: 700,
                          color:'#cfcfcf' 
                        }}
                          >
                           {item.primary}
                          </Typography>
                        <Typography variant="h6" component="div" 
                        sx={{ 
                          textAlign: 'center', 
                          mt: 2,
                          fontSize: {xs: '0.8rem', sm:'1.2rem'},
                          fontFamily:'monospace', fontWeight: 700,
                          color:'#cfcfcf'  
                          }}
                          >
                         {item.secondary}
                          </Typography>
                        
                      </CardContent>
                    </Card>
                </Box>

            {/* Back of Card*/}
            <Box sx={{height: 180}}>
                <Box sx={{width: 'inherit', height: 'inherit', display: 'flex', justifyContent:"center", alignItems: 'center',}}>
                    <Typography variant="caption" component="div" sx={{color: 'white', fontFamily:'monospace', fontWeight: 700 }}>{item.description}</Typography>
                </Box>
            
            </Box>
            </ReactCardFlip>

        </Box>
    );
}

export default CardFlip;
