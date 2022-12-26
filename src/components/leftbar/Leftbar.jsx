import { useContext } from 'react'
import './leftbar.scss';
import { AuthContext } from '../../context/authContext';

const Leftbar = () => {

const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftbar' >
        <div className='container'>
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePic} alt='' />
                    <span>{currentUser.name}</span>
                </div>
                 <div className="item">
                    <img src="" alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Memories</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Your Shortcuts</span>

                <div className="item">
                    <img src="" alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Memories</span>
                </div>
            </div>
            <hr />
            <div className="menu">
                <span>Others</span>
                <div className="item">
                    <img src="" alt="" />
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <span>Watch</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Leftbar