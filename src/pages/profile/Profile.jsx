import React from 'react'
import './profile.scss';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img src='https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' className='cover' />
        <img src='https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' className='profilePic' />
      </div>
      <div className='profileContainer'>
        <div className='uInfo'>
          <div className='left'>
            <a href="">
              <FacebookTwoToneIcon fontSize='large' />
            </a>
            <a href="">
              <LinkedInIcon fontSize='large' />
            </a>
            <a href="">
              <InstagramIcon fontSize='large' />
            </a>
            <a href="">
              <TwitterIcon fontSize='large' />
            </a>
            <a href="">
              <PinterestIcon fontSize='large' />
            </a>

          </div>
          <div className='center'>
            <span>Jenny Larsen</span>
            <div className='info'>
              <div className='item'>
                <PlaceOutlinedIcon />
                <span>IND</span>
              </div>
              <div className='item'>
                <LanguageIcon />
                <span>Spanish</span>
              </div>
              </div>
              <button>Follow</button>
            </div>
          <div className='right'>
            <MailOutlineOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        {/* Post Component */}
      <Posts />
      </div> 
    </div>
  )
}

export default Profile;