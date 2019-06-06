import React from "react";
import App from "../../App";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

// printing each post to the screen using props
const PostContainer = props => {
  return (
    <div className="container">
      <div className="post-container">
        <img className="thumbnail" src={props.post.thumbnailUrl} />
        <h4 className="username">{props.post.username}</h4>
      </div>
      <img className="image" src={props.post.imageUrl} />
      <div className="post-icons">
        <img src="https://img.icons8.com/windows/32/000000/hearts.png" />
        <img
          className="speech"
          src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"
        />
      </div>
      <p className="likes"> {props.post.likes} likes </p>
      {props.post.comments.map(item => {
        return <CommentSection comment={item} />;
      })}
    </div>
  );
};

export default PostContainer;
