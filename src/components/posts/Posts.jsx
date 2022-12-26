import React from 'react'
import './posts.scss';
import Post from  '../post/Post';
const Posts = () => {

  // temporary data 
  const posts = [
    {
      id: 1, 
      name: 'John Doe',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      img: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2, 
      name: 'Prasandeep',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      img: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3, 
      name: 'Jasmine',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      img: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4, 
      name: 'Nikolas',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      img: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 1, 
      name: 'Ellies',
      userId: 1,
      profilePic: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text',
      img: 'https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
       < Post post={ post}  key={post.id}/>
      ))}
    </div>
  )
}

export default Posts