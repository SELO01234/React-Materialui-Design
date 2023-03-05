import { Box, Button, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { Stack } from '@mui/system';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const Add = () => {

  const [open,setOpen] = useState(false);

  return (
    <>
    <Tooltip title="Share" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}} onClick={(e)=> setOpen(true)} >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
    open={open}
    onClose={(e)=> setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
        <Typography variant='h6' color={'gray'} textAlign="center">Create post</Typography>
        <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <Button bgcolor={"background.default"}>
            <ImageIcon/>
            </Button>
            <Button bgcolor={"background.default"}>
            <VideoLibraryIcon/>
            </Button>
        </Stack>
        <Button fullWidth variant='contained'>Post</Button>
    </Box>
  </StyledModal>
    </>
  )
}

export default Add
