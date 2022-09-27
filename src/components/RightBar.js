import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function RightBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={320}>
                <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                    <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU" />
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
                    <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    <Avatar alt="Remy Sharp" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                    <Avatar alt="Trevor Henderson" src="https://i.imgur.com/JFHjdNr.jpg" />
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
                    <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45' alt="itemphoto" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' alt="itemphoto" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8' alt="itemphoto" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f' alt="itemphoto" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6' alt="itemphoto" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1' alt="itemphoto" />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2ahJliB6cPF2rMalfHlFmJuM7Tjgs1iGHO0279xD6Wyg_fPPB9UCXd0J5oPlSXcncN8&usqp=CAU" />
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
                            <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZkC9WleOYbfXUBvdGoUaYVIzI-d6aps266_KKJe-zXutoXEF2aIr-AZxrzOtstTnbDE&usqp=CAU" />
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
                            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
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

export default RightBar