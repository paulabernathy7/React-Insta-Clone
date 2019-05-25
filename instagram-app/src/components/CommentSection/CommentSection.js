import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "../PostContainer/PostContainer";

const CommentSection = props => {
  console.log("PGA", props.comment);
  {
    /* passed comments to the CommentSection through prop*/
  }

  return (
    <div>
      <p>{props.comment.username}</p>
      <p>{props.comment.text}</p>
    </div>
  );
};

export default CommentSection;
