import React,{useEffect,useState} from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

function ViewStory() {

    const {id,total}= useParams();
    const [story,setStory] = useState(null);
    const navigate = useNavigate();
    
      useEffect(()=>{
        fetch(`http://localhost:3000/story/${id}`)
        .then (data => data.json())
        .then(data => setStory(data))
        .catch(err => console.log(err))
      },[id]);

   if (total) {
    if (id > total || id <=0 ) {
      navigate('/');
     }
  

  }
  return (
  <>
    <div>{story ?
    <div className=''>
      <div className='d-flex'>
      <h2 className=' sty-name'>Instar</h2>
    </div >
    <div className='d-flex justify-content-center align-items-center vh-100 story-view '>
      <Link to={`http://localhost:5173/story/${Number(id)-1}/${total}`} ><i className="bi bi-arrow-left m-5"></i></Link>
      <div>
        <div className='feed-story d-flex '>
          <img className='dp rounded-circle' src={story.user.profilePic} alt="" />
        <h5 className='feed-name mp-1 m-1'>{story.user.username}</h5>
        </div>
        <div className="post">
           <img src={story.image} alt="story" className="post-image" />
  <div className="post-actions">
    <input type="text" placeholder="Reply to ...." className="reply-box" />
    <div className="icons">
      <i className="bi bi-heart" onClick={e => {
                    e.currentTarget.className = e.currentTarget.className === 'bi bi-heart' ? 'bi bi-heart-fill' : 'bi bi-heart';
                    e.currentTarget.style.color = e.currentTarget.style.color === '#000000' ? '' : '#000000';
                  }}></i>
                    
      <i className="bi bi-send"onClick={e => {
                    e.currentTarget.className = e.currentTarget.className === 'bi bi-send' ? 'bi bi-send-fill' : 'bi bi-send';
                    e.currentTarget.style.color = e.currentTarget.style.color === '#000000' ? '' : '#000000';
                  }} ></i>
    </div>
    
  </div>
</div>
      </div>
        
        <Link to={`http://localhost:5173/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right m-5"></i></Link>
    </div> 
    <div className='close'>
      <Link to={`http://localhost:5173/`}><i className='bi bi-x-lg'></i></Link>
    </div>    
    </div>
    
    :
    <div>loading</div>}</div>
  </>
    
  )
}

export default ViewStory