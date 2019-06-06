import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <h3 className="h3">{props.comment.username}</h3>
      <p className="text">{props.comment.text}</p>
    </div>
  );
};

export default CommentSection;
