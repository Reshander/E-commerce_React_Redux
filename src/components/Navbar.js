import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const favProd =useSelector(state =>state.favProductReducer)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#e91e63"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#f50057"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reshander Online Store
          </Typography>
          <Button variant="contained" color="info" sx={{ marginRight: "10px"}}>
             <Link to="/">Products</Link>
          </Button>
          <Button variant="contained" color="info"  sx={{ marginRight: "10px" }}>
             <Link to="/favourite">Favourite:{favProd.length}</Link>
          </Button> 
          <Button variant="contained" color="info"  sx={{ marginRight: "10px" }}>
             <Link to="/cart">cart</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
