import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const[stories,setStories] =useState([]);
  const navigate = useNavigate();
  
  let total = 0;

  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then (data => data.json())
    .then(data => setStories(data))
    .catch(err => console.log(err))
  },[]);

  return (
    <>
    <div className="story d-flex">
  <div className="d-none">{(total = stories.length)}</div>

  {stories.length > 0 ? (
    stories.map((story) => (
      <div
        key={story.id}
        className="mx-1 story-card"
        onClick={() => navigate(`/story/${story.id}/${total}`)}
      >
        <div className="gradient-boder">
          <img
            src={story.user.profilePic}
            alt=""
            className="story-dp rounded-circle"
            style={{ pointerEvents: "none" }} // 👈 allows click through image
          />
        </div>
        <p className="tname text-truncate" style={{ width: "60px" }}>
          {story.user.username}
        </p>
      </div>
    ))
  ) : (
    <p>loading..</p>
  )}
</div>

    </>
  )
}

export default Stories