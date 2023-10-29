import React from 'react'
import { post } from '../Posts/Data'
import './Post.css'
import Caraousel from './Caraousel'
const Posts = () => {
  return (
    <>
        {
        post.map((p) =>{
          return(
            <div className="post">
             <div className="post-info">
             <div className="heading flex">
                <div className="user-info flex">
                  <img src={p.userimg} alt={p.name} />
                  <div className="user">
                  <div className="name">{p.name}</div>
                  <div className="username">{p.username}</div>
                  </div>
                </div>
                <div className="icon"><i class='bx bx-dots-vertical-rounded'></i></div>
              </div>

              <div className="post-data">
                <div className="title">{p.title} <span>Read More</span></div>
                <div className="post-img">
                  <img src={p.img}alt={p.name} />
                  <i class='bx bx-heart'></i>
                </div>
                <div className="post-bottom flex">
                  <li><i class='bx bx-like' ></i>{p.like}</li>
                  <li><i class='bx bx-comment'></i>{p.comment}</li>
                  <li><i class='bx bx-share' ></i>{p.share}</li>
                </div>
              </div>
             </div>
            </div>

          )
        })
       }

       <div className="carousel">
         <Caraousel />
       </div>
    </>
  )
}

export default Posts