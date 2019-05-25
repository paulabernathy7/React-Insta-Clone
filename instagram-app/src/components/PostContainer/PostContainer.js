import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  {
    /*created a functional component and passed props. we passed all of the keys in our array object */
  }
  console.log(props.post);
  return (
    <div>
      {props.post.username}
      <img src={props.post.thumbnailUrl} />
      <img src={props.post.imageUrl} />
      {props.post.likes}
      {props.post.timestamp}

      {/* mapping over our comments and then passing them to the CommentSection component */}
      <div>
        {props.post.comments.map((item, index) => {
          console.log("RGA", item);
          return <CommentSection key={index} comment={item} />;
        })}
      </div>
    </div>
  );
};

export default PostContainer;
