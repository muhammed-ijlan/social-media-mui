import { Box } from '@mui/material'
import React from 'react'

function RightBar() {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            rightbar
        </Box>
    )
}

export default RightBar