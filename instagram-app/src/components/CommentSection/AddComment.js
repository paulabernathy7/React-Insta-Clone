import React from "react";
import CommentSection from "./CommentSection";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./CommentSection.css";

const AddComment = props => {
  console.log("props", props);
  return (
    <form>
      <input
        onChange={props.changeHandler}
        className="comment"
        placeholder="Add a comment..."
        type="text"
      />
    </form>
  );
};

export default AddComment;
