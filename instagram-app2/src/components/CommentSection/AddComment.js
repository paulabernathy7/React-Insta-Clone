import React from "react";

const AddComment = props => {
  return (
    <form onSubmit={props.submitHandle}>
      <input
        value={props.comment}
        onChange={props.changeHandle}
        className="comment"
        placeholder="Add a comment..."
        type="text"
      />
    </form>
  );
};

export default AddComment;
