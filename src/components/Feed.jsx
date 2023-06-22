import React from 'react';
import { useState,useEffect } from 'react';
import {Stack, Box, Typography} from '@mui/material'
import SideBar from './SideBar';


const Feed = () => (
        <Stack sx={{ flexDirection: {sx: 'column' , md: 'row'}}}>
            <Box sx={{ height: {sx: 'auto', md: '92vh'}, 
            borderRight: '1px solid #3d3d3d',
            px:{sx: 0 , md:2}}}>
                <SideBar />
            <Typography className='copyright' variant='body2' 
            sx={{ mt:1.5, color: '#fff' }} >
                copyright 2023
            </Typography>
            </Box>
            <Box p={2}>
                <Typography variant='h4' fontWeight='bold' mb={4} sx={{color: 'white'}}>
                New <span style={{color: '#F31503'}}>Videos</span>
                </Typography>
            </Box>
        </Stack>
    )
export default Feed;