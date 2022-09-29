import React, { useEffect, useState } from 'react'
import { Share, Favorite, MoreVert, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import axios from 'axios'




function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://ig-food-menus.herokuapp.com/burgers")
            console.log(res.data);
            setPosts(res.data)
        }
        fetchData();
    }, [])

    return (<>
        {posts.map(post => (
            <Card sx={{ margin: "20px" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            SA
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Sam alaxander"
                    subheader={post.country}
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={post.img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant='h5'>{post.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{post.dsc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>

                </CardActions>

            </Card>
        ))}

    </>
    )
}

export default Post