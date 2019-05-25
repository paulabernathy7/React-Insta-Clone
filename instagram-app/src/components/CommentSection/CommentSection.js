import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "../PostContainer/PostContainer";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./CommentSection.css";

const CommentSection = props => {
  console.log("PGA", props.comment);
  {
    /* passed comments to the CommentSection through prop*/
  }

  return (
    //returned the the comments username and text via props//
    <div>
      <div className="comment-section">
        <h3 className="h3">{props.comment.username}</h3>
        <p className="text">{props.comment.text}</p>
      </div>
      <input placeholder="Add a comment..." type="text" />
      <div />
    </div>
  );
};

// added proptypes to check data//
CommentSection.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
