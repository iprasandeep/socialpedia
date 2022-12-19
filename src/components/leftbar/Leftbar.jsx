import React from 'react'
import './leftbar.scss';
const Leftbar = () => {
  return (
    <div className='leftbar' >
        <div className='container'>
            <div className="menu">
                <div className="user">
                    <img src='Joh Doe' alt='' />
                    <span>John Doe</span>
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
            <hr />
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
        </div>
    </div>
  )
}

export default Leftbar