import React from "react";
import App from "../../App";
import AddComment from "../CommentSection/AddComment";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

// printing each post to the screen using props
// refactored into class component
//note when using a class component and state remember to use THIS
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: "",
      likes: this.props.post.likes
    };
  }

  // event that update state when a comment is being typed
  handleComment = event => {
    this.setState({
      comment: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();
    // new object created
    const newComment = { text: this.state.comment, username: "New User" };
    // cloned comments array
    const comments = this.state.comments.slice();
    // pushed newComment obj
    comments.push(newComment);
    // set new clone as state and reset our comment stringt
    this.setState({ comments, comment: "" });
  };

  incrementLike = () => {
    const likes = this.state.likes;
    this.setState({ likes: likes + 1 });
  };

  render() {
    return (
      <div className="container">
        <div className="post-container">
          <img className="thumbnail" src={this.props.post.thumbnailUrl} />
          <h4 className="username">{this.props.post.username}</h4>
        </div>
        <img className="image" src={this.props.post.imageUrl} />
        <div className="post-icons">
          <img
            onClick={this.incrementLike}
            src="https://img.icons8.com/windows/32/000000/hearts.png"
          />
          <img
            className="speech"
            src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"
          />
        </div>
        <p className="likes"> {this.state.likes} likes </p>
        {/* above had to refactor likes to this.state since likes is now on state*/}

        {/* mapping over our comments and then passing them to the CommentSection component */}

        {this.state.comments.map(item => {
          return <CommentSection comment={item} />;
        })}

        <AddComment
          submitHandle={this.addComment}
          changeHandle={this.handleComment}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

export default PostContainer;
