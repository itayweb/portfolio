import React from 'react'
import Links from '../links/links'
import { Box } from '@mui/material'

function NavBar() {
    return (
        <Box sx={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#E9E9E9',
            width: '500px',
            height: '50px',
            borderRadius: '45px',
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
            position: 'sticky',
            top: '0',
            zIndex: '10'
        }}>
            <Links/>
        </Box>
    )
}

export default NavBar