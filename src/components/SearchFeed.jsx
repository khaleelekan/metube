import React from 'react';
import { useState,useEffect } from 'react';
import { Box, Typography} from '@mui/material'
import {Videos } from './'
import { fetchFromAPI} from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () =>{
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])

   useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setVideos(data.items))
   },[searchTerm])


  return(
            <Box p={2}>
                <Typography variant='h4' fontWeight='bold' mb={4} sx={{color: 'white'}}>
                Search Result For:<span style={{color: '#F31503'}}>{searchTerm}</span> Videos
                </Typography>
                <Videos videos={videos} />
            </Box>
           
    )}
export default SearchFeed;


