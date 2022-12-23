import React from 'react'
import './rightbar.scss'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {/* User 1 */}
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          {/* User 2 */}
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        {/* Latest Activites */}
        <div className="item">
          <span> Latest Activities </span>
          {/* User 1 */}
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <p>
              <span>John Doe </span>
               changed thier cover picture
              </p>
            </div>
            <span>1 min ago </span>
            {/* <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div> */}
          </div>
          {/* User 2 */}
          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <p>
              <span>John Doe </span>
                changed thier cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="" alt="" />
              <p>
              <span>John Doe </span>
              changed thier cover picture
              </p>
            </div>
            <span>1 min ago </span>
          </div>
        </div>
        {/* Online Friends */}
        <div className="item">
          <span>Online Friends</span>
        </div>

      </div>
    </div>
  )
}

export default Rightbar