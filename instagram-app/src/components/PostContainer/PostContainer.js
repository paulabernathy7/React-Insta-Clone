import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
import AddComment from "../CommentSection/AddComment";
import PropTypes from "prop-types";
import "./PostContainer.css";

class PostContainer extends React.Component {
  /*created a class component and passed props. we passed all of the keys in our array object */
  /*passed our comments array from the app component to state. Then added empty comment to our state*/
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: ""
    };
  }

  // created the handler to update the state when a comment is being typed
  commentHandler = event => {
    this.setState({
      comment: event.target.value
    });
  };

  // created the function below to add comments
  addComment = e => {
    e.preventDefault();
    //comment object
    const newComment = { text: this.state.comment, username: "New User" };
    //clone comments array
    const comments = this.state.comments.slice();
    //push newcomment obj into array
    comments.push(newComment);
    //set new clone as state and reset our comment string

    this.setState({ comments: comments, comment: "" });
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
          <img src="https://img.icons8.com/windows/32/000000/hearts.png" />
          <img
            className="speech"
            src="https://img.icons8.com/material-outlined/24/000000/speech-bubble.png"
          />
        </div>
        <p className="likes"> {this.props.post.likes} likes </p>

        {/* mapping over our comments and then passing them to the CommentSection component */}
        {/* used index for get rid of the key warining */}
        {/* created AddComment component and passed it to postcontainter because that is where my post are*/}
        {/* added changeHandler to AddComment component to update the state on change*/}

        <div>
          {this.state.comments.map((item, index) => {
            return <CommentSection key={index} comment={item} />;
          })}
          <AddComment
            submitHandler={this.addComment}
            changeHandler={this.commentHandler}
            comment={this.state.comment}
          />
        </div>
      </div>
    );
  }
}
// added proptypes to check data//

PostContainer.propTypes = {
  post: PropTypes.shape({
    img: PropTypes.string,
    likes: PropTypes.number
  })
};

export default PostContainer;
