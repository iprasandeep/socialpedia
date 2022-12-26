import {useState} from 'react'
import './post.scss';
import { Link } from 'react-router-dom';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from '../comments/Comments';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
// Temporary 
const liked = true;

  return (
    <div className='post'>
        <div className='container'>
                <div className='user'>
                    <div className='userInfo'>
                        <img src={post.profilePic} alt='' />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                                <span>{post.name}</span>
                            </Link>
                            <span className='date'> 1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon />
                </div>
            <div className='content'>
                <p>{post.desc}</p>
                <img src={post.img} alt='' />
            </div>
        <div className='info'>
            <div className='item'>
    {liked ?<FavoriteIcon style={{ color:'red'}}></FavoriteIcon>:<FavoriteBorderOutlinedIcon/>}
            12 likes
            </div>

            <div className='item' onClick={()=>setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                Comments
            </div>

            <div className='item'>
                <ShareOutlinedIcon />
                Share
            </div>
        </div>
        {commentOpen && <Comments/> }
    </div>
    </div>
  )
}

export default Post