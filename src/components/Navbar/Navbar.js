import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {useDataCustomHook} from '../../Data/data';


const colorAlexis = "#8F8A7A";


function Navbar({activeLink, setActiveLink}) {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const data = useDataCustomHook();
  const {name, header: {pages}} = data;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setActiveLink(location.pathname.length > 1 ? location.pathname.replace(/^\/+/, '') : '/')
  },[location.pathname])
  

  return (
    <AppBar position="static" sx={{background:"none", boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colorAlexis,
              textDecoration: 'none',
            }}
          >
            {name}
          </Typography>

          <Box sx={{ flexGrow: 1,  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={colorAlexis}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link 
                  href={page.path} 
                  underline="none" 
                  sx={{
                    fontFamily: 'Assistant, sans-serif',
                    fontOpticalSizing: 'auto',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    color: activeLink === page.path ? '#564e37' : colorAlexis, 
                    cursor:"pointer",
                    "&:hover":{
                      color: '#564e37'
                    }
                  }}
                  >
              {page.label.toUpperCase()}
            </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* for desktops screens */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colorAlexis,
              textDecoration: 'none',
            }}
          >
            {name}
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent:"center", alignItems:"flex-start" , textAlign:"center" , display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link 
              href={page.path} 
              underline="none" 
              sx={{
                fontFamily: 'Assistant, sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
                fontWeight: 700,
                color: activeLink === page.path ? '#564e37' : colorAlexis, 
                mx:3, 
                cursor:"pointer",
                "&:hover":{
                  color: '#564e37'
                }

              }}
              >
              {page.label.toUpperCase()}
            </Link>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;