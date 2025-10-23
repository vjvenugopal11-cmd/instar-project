import React from 'react'


function Sidebar() {
  return (<>
  <div className='container position-fixed m-1 d-flex ' >
    <div className='sidebar m-1'>
    <div className='d-flex flex-column gap-3 '> 
        <img className='logo-text gap-3 '  src = "src\assets\TEXT.png" alt='' />

        <div className=' d-flex flex-column gap-2 align-items-center mt-1 '>
        <div className=' my-button  '><i className="bi bi-house-heart "></i>Home</div>
        <div className=' my-button '><i className="bi bi-search-heart"></i>Search</div>
        <div className=' my-button '><i className="bi bi-compass"></i>Explore</div>
        <div className=' my-button '><i className="bi bi-film"></i>Reels</div> 
        <div className=' my-button '><i className="bi bi-chat-heart"></i>Messages</div>
        <div className=' my-button '><i className="bi bi-balloon-heart "></i>Notifications</div>
        <div className=' my-button '><i className="bi bi-terminal-plus"></i>Create</div>
        <div className=' my-button '><i className="bi bi-person-bounding-box"></i>Profile</div>
        </div>
        
    </div>
    <div className=' more d-flex flex-column mb-3 gap-3 '> 
        <div className='my-button '><i className="bi bi-list"></i>More</div>
        <div className=' my-button '><i className="bi bi-gear-wide-connected"></i>Settings</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar
