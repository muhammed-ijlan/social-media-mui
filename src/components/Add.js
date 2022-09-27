import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px"
}))

function Add() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={() => setOpen(true)} title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar sx={{ width: "30px", height: "30px" }} src='https://www.w3schools.com/howto/img_avatar2.png' />
                        <Typography variant='span' fontWeight={500}>John Doe</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        placeholder='Whats on your mind!'
                        multiline
                        rows={2}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button sx={{ width: "250%" }}>Post</Button>
                        <Button><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>

        </>
    )
}

export default Add