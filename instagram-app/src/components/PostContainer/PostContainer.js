import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
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
      <p> {props.post.likes}</p>
      <p> {props.post.timestamp}</p>

      {/* mapping over our comments and then passing them to the CommentSection component */}
      {/* used index for get rid of the key warining */}

      <div>
        {props.post.comments.map((item, index) => {
          console.log("RGA", item);
          return <CommentSection key={index} comment={item} />;
        })}
      </div>
    </div>
  );
};
// added proptypes to check data//

PostContainer.propTypes = {
  post: PropTypes.shape({
    img: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default PostContainer;
