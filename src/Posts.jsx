import React, { useEffect,useState } from 'react'

function Posts() {

  const [likedPosts, setLikedPosts] = useState([]);
  const[posts,setPosts]=React.useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((data)=>data.json())
    .then((data)=>setPosts(data))
    .catch((err)=>console.log(err));
},[]);

  return (
    <div className=' d-flex justify-content-center'>
      {posts.length > 0 ? (
        <div>
         {posts.map((post) =>(
         <div className='my-3' key={post.id}>
          <div className='d-flex'>
            <img className='dp rounded-circle' src={post.user.profilePic} alt="" />
            <h6  className='mt-2 mp-1'>{post.user.username}</h6>
            <i className="bi bi-three-dots ms-auto mt-2"></i>
          </div>
          <div>
              <img className='image' src={post.image} alt="" />
              
              <div className='post-icon d-flex gap-3 mt-2 mb-2'>
              <i className="bi bi-heart" onClick={e => {
                    e.currentTarget.className = e.currentTarget.className === 'bi bi-heart' ? 'bi bi-heart-fill' : 'bi bi-heart';
                    e.currentTarget.style.color = e.currentTarget.style.color === '#000000' ? '' : '#000000';
                  }}></i>
      
                <i className="bi bi-chat-left-heart"></i>
                <i className="bi bi-send"></i>
                <i className="bi bi-bookmark ms-auto" onClick={e => {e.currentTarget.className=== 'bi bi-bookmark' ? 'bi bi-bookmark' : 'bi bi-bookmark';
                  e.currentTarget.style.color = e.currentTarget.style.color === '#000000'?'':'#000000';
                }}></i>
              </div>
              <div>
                <h6>{post.likes} Likes</h6>
              </div>
              <p>{post.caption}</p>
            </div>
            <hr className='b-line' />
         </div>
         ))}
        </div>

        ):(
          <div>Loading...</div>
        )}
          
  </div>
  )
}

export default Posts