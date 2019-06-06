import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  //printed the comments to the screen using props
  return (
    <div className="comment-section">
      <h3 className="h3">{props.comment.username}</h3>
      <p className="text">{props.comment.text}</p>
    </div>
  );
};

//proptypes to take data
CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
