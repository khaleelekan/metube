import React from 'react';
import {Stack} from '@mui/material'
import { categories } from '../utils/constants';

const selectedCategory = 'New'
const SideBar = () => (
    <Stack 
    direction= 'row' 
    sx ={{ overflow:'auto', height:{sx: 'auto', md: '95%' },
    flexDirection: {md : 'column'}
}}
    >
        {categories.map((category)=>(
            <button 
            className='category-btn'
            style={{background: category.name === 
            selectedCategory && '#FC1503', 
            color: 'white'}}
            key={category.name}>
                <span 
                style ={{ color: selectedCategory === category.name ? 'white': 'red', 
                marginRight: '15px'}} >
                    {category.icon}</span>
                <span style={{opacity: selectedCategory === category.name ? 1: 0.8 }}>{category.name}</span>

            </button>
        ))}
      <div>sidebar</div>
    </Stack>
    )
export default SideBar;