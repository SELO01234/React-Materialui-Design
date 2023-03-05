import { Avatar, AvatarGroup, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs: "none", sm:"block"}}}>
      <Box position={'fixed'}>
        <Typography variant='h6' fontWeight={300}>Online friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src='#' sx={{backgroundColor:"red"}}/>
          <Avatar alt="Travis Howard" src='#' sx={{backgroundColor:"pink"}}/>
          <Avatar alt="Cindy Baker"src='#' sx={{backgroundColor:"green"}}/>
          <Avatar alt="Agnes Walker" src='#' sx={{backgroundColor:"purple"}}/>
          <Avatar alt="Trevor Henderson"src='#' sx={{backgroundColor:"blue"}}/>
        </AvatarGroup>
        <Typography variant='h6' fontWeight={300}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="#" sx={{backgroundColor:"red"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="#" sx={{backgroundColor:"pink"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="#" sx={{backgroundColor:"green"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
