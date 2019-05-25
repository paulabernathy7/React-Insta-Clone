import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  {
    /*created a functional component and passed props. we passed all of the keys in our array object */
  }
  console.log(props.post);
  return (
    <div className="post-container">
      {props.post.username}
      <img src={props.post.thumbnailUrl} />
      <img src={props.post.imageUrl} />
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
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.number
  })
};

export default PostContainer;
