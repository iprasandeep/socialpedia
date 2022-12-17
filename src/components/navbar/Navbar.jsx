import React from 'react'
import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{ textDecoration: 'none' }}>
                
                <span>SocialPedia</span>
            </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
            <div className='search'>
                <SearchOutlinedIcon />
                <input type='text' placeholder='search' />
            </div>
        </div>
        <div className="right">
            < PersonOutlineOutlinedIcon />
            < EmailOutlinedIcon />
            < NotificationsOutlinedIcon />
            <div className='user'>
                <img src='Joh Doe' alt='' />
                <span> John Doe</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar