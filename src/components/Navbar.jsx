import styled from '@emotion/styled'
import { AppBar, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Box, padding, Stack, width } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding: "0 10px",
  borderRadius: "10px",
  width:"40%"
}));

const Icons = styled(Box)(({theme}) => ({
  display:"flex",
  alignItems:"center"
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Stack direction="row" spacing={0.5}>
          <ConnectWithoutContactIcon />
          <Typography variant='h5' sx={{display:{xs: "none", sm:"block"}}}>Share Hub</Typography>
        </Stack>
      <Search><InputBase placeholder='search...'/></Search>
      <Icons onClick={(e) => setOpen(true)} sx={{cursor:'pointer'}}>
          <PersonIcon/>
          <Typography variant='p' sx={{display:{xs: "none", sm:"block"}}}>Account</Typography>
      </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
