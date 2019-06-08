import React from "react";
import App from "../../App";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

// printing each post to the screen using props
// refactored into class component
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: ""
    };
  }

  render() {
    return (
      <div className="container">
        <div className="post-container">
          <img className="thumbnail" src={this.props.post.thumbnailUrl} />
          <h4 className="username">{this.props.post.username}</h4>
        </div>
        <img className="image" src={this.props.post.imageUrl} />
        <div className="post-icons">
          <img src="https://img.icons8.com/windows/32/000000/hearts.png" />
          <img
            className="speech"
            src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"
          />
        </div>
        <p className="likes"> {this.props.post.likes} likes </p>
        {/* mapping over our comments and then passing them to the CommentSection component */}

        {this.props.post.comments.map(item => {
          return <CommentSection comment={item} />;
        })}
      </div>
    );
  }
}

export default PostContainer;
