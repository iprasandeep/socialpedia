import {useContext} from 'react'
import './stories.scss';
import { AuthContext } from '../../context/authContext'

const Stories = () => {

    const { currentUser} = useContext(AuthContext);
// fetching temporary dummy data
const stories = [
    {
        id: 1,
        name: 'John Doe',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"',
    },
    {
        id: 2,
        name: 'Deep Doe',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"'
    },
    {
        id: 3,
        name: 'Prasandeep',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
        id: 4,
        name: 'Divya',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
        id: 5,
        name: 'Nikita',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    },
    {
        id: 6,
        name: 'Apasara',
        img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    }
]

  return (
    <div className='stories'>
        {/*  main user story */}
        <div className="story">
                <img src={currentUser.profiePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories