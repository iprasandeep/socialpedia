import React from 'react'
import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to='/' style={{ TextDecoration: "none" }}>
                <span>SocialPedia</span>
            </Link>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Navbar