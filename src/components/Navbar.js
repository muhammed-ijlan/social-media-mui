import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Pets, Mail, Notifications } from '@mui/icons-material';
import { Box } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const SearchBar = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"

}))

const IconContainer = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))


function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Typography sx={{ display: { xs: "none", sm: "block" } }} variant='h6'>
                    SocialApp
                </Typography>
                <SearchBar>
                    <InputBase placeholder='search...' />
                </SearchBar>
                <IconContainer>
                    <Badge badgeContent={4} color="error">
                        <Mail color="blueGrey" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="blueGrey" />
                    </Badge>
                    <Avatar sx={{ width: "30px", height: "30px" }} src='https://www.w3schools.com/howto/img_avatar2.png' onClick={(e) => setOpen(true)} />
                </IconContainer>
                <UserBox>
                    <Avatar sx={{ width: "30px", height: "30px" }} src='https://www.w3schools.com/howto/img_avatar2.png' onClick={(e) => setOpen(true)} />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar