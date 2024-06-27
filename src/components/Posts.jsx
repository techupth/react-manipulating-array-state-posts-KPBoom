import { useState } from "react";
import {postData} from "./data";

function Posts() {
  const  [post,setPost] = useState(postData);
  const pushLike = (index) => {
    const newPost = [...post];
    newPost[index].likes += 1;
    setPost(newPost);
  };
  const disLike = (index) => {
    const newPost = [...post];
    if(newPost[index].likes >0){newPost[index].likes -= 1;}
    setPost(newPost);
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {post.map((item,index)=>{
          return(
            <div class="post-item" key={index}>
                <div class="post-header">
                  <h2>{item.title}</h2>
                    <div class="post-social-media-stats">
                      <span class="stats-topic">Likes: </span>
                      <span class="post-likes">{item.likes}</span>
                    </div>
                </div>
             <p class="post-content">
                {item.content}
             </p>
             <div class="post-actions">
                <button class="like-button" onClick={()=>pushLike(index)}>Like</button>
                <button class="dislike-button" onClick={()=>disLike(index)}>Dislike</button>
             </div>
        </div>            
          )
        })}
        
      </div>
    </div>
  );
}

export default Posts;
