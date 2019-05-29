import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
import AddComment from "../CommentSection/AddComment";
import PropTypes from "prop-types";
import "./PostContainer.css";

const PostContainer = props => {
  {
    /*created a functional component and passed props. we passed all of the keys in our array object */
  }
  console.log(props.post);
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

      {/* <p> {props.post.timestamp}</p> */}

      {/* mapping over our comments and then passing them to the CommentSection component */}
      {/* used index for get rid of the key warining */}
      {/* created AddComment component and passed it to postcontainter because that is where my post are*/}

      <div>
        {props.post.comments.map((item, index) => {
          return <CommentSection key={index} comment={item} />;
        })}
        <AddComment />
      </div>
    </div>
  );
};
// added proptypes to check data//

PostContainer.propTypes = {
  post: PropTypes.shape({
    img: PropTypes.string,
    likes: PropTypes.number
    // timestamp: PropTypes.string
  })
};

export default PostContainer;
