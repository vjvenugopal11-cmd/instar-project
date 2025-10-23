import React, { useEffect, useState } from 'react'

function Suggestions() {

  const[profile,setProfile] = useState(null);
  const[suggestions,setSuggestions] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/profile')
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err))

    fetch('http://localhost:3000/Suggestions')
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err))
  },[]);

  return (
    <div className='sug'>
      <>
      <div className='suggestions w-75 m-3'>
        {profile ?
      <div className=' d-flex align-items-center '> 
            <img className='dp rounded-circle' src={profile.profilePic} alt="" />
            <h5 className='m-2' >{profile.username}</h5>
           <button className= 'swt '><h4>Switch</h4></button> 
          </div>
          :
          <p>loading</p>}
            <div className='m-1 kl  d-flex'>
              <p>Suggested for you</p>
              <b className='m-3'>see all</b>
            </div>
     </div>
                     
     <div>
       {suggestions.length > 0 ? 
      (<div className=' mt-2 ' >
          {suggestions.map((suggestion) =>(
              <div className='slt  ' key={suggestion.id}>
                  <div className='note d-flex '>
                  <img className='dp rounded-circle' src={suggestion.profilePic} alt="" />
                  <h5 className='sname mt-2 mp-2'>{suggestion.username}</h5>
                 <button className='button btn btn-light ms-auto mt-2  mb-2 '>
                   <p className='follow ms-auto ' onClick={e => e.target.textContent = e.target.textContent === 'Follow' ? 'Following' : 'Follow'}>Follow</p>
                 </button>
                  </div>
              </div>
                  ))}
       </div>):(<p>loading</p>)}
     </div>
     </>
     <div>
      <p className='foot'>About  ·  Help  ·  Press  ·  API  ·  Jobs  ·  Privacy  ·  Terms  ·  Locations  ·  Language</p>
      <p className='foot '>&copy; 2025 INSTAR FROM VENZO</p>
     </div>
     <div className="message "> 
        <i className=" bi bi-chat-heart btn btn-light ms-auto " >  Messages</i>
     </div>
    </div>
  )
}

export default Suggestions