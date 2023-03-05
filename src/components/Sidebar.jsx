import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React from 'react'
import { ModeNight } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}} >
      <Box position={'fixed'}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#profile'>
            <ListItemIcon>
              <AccountBoxIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#settings'>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#settings'>
            <ListItemIcon>
              <ModeNight/>
            </ListItemIcon>
            <Switch onChange={(e)=>setMode(mode === 'light' ? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar
