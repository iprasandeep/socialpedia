import {useContext} from 'react'
import { AuthContext } from '../../context/authContext';
import './comments.scss';

const Comments = () => {

    const { currentUser } = useContext(AuthContext);

    const comments = [
        {
            id: 1, 
            desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
            name: 'Ellies',
            userId: 1,
            profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            
        },
        {
            id: 2, 
            desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
            name: 'Ellies',
            userId: 2,
            profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            
        },
        {
            id: 3, 
            desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
            name: 'Ellies',
            userId: 3,
            profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            
        }
    ]
  return (
      
    <div className='comments'>
        <div className='write'>
            <img src={currentUser.profilePic} alt='' />
            <input type='text' placeholder='write a comment' />
            <button>Send</button>
        </div>
         {comments.map(comment=>(
       <div className='comment'>
           <img src={comment.profilePic} alt='' />
           <div className='info'>
               <span>{comment.name}</span>
               <p>{comment.desc}</p>
           </div>
           <span className='date'>1 hours ago</span> 
       </div>
      ))}
    </div>
  )
}

export default Comments