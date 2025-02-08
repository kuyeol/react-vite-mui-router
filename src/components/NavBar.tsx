import { AppBar, Toolbar, Typography, Button, useMediaQuery, Container, CssBaseline, ListItemIcon } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Home from "../pages/Home";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Settings from '@mui/icons-material/Settings';

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

function Navbar() {

  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 8000px)"); // 1900px 이상이면 사이드바 항상 열림

  const toggleDrawer = () => setOpen(!open);
  return (

    <Box sx={{ display: 'flex', margin:0 , padding:0}}>
      

      <AppBar>
        <Toolbar>
    
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          <Typography  >  타이틀  </Typography>
        </Toolbar>
      </AppBar>

    

      <Drawer  open={open} onClose={toggleDrawer} >
    
        <List sx={{ Width: 250, marginTop: 0, marginRight: 2, marginLeft: 1 }}>
          <ListItem disablePadding>
            <ListItemButton >
              <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Typography  >  타이틀  </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer}  >
              <HomeIcon />
              <ListItemText primary="홈" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about" onClick={toggleDrawer}>
              <InfoIcon />
              <ListItemText primary="컨텐츠" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

    </Box>
  );
}

export default Navbar;