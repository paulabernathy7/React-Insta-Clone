import React from "react";
import PostContainer from "../PostContainer/PostContainer";
import AddComment from "./AddComment";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./CommentSection.css";

class CommentSection extends React.Component {
  //passed the props of PostContainer below
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    // when using class component you have to use this.props
    this.setState({ comments: this.props.comment });
  }

  render() {
    console.log(this.state.comments);
    return (
      <div className="comment-section">
        <h3 className="h3">{this.state.comments.username}</h3>
        <p className="text">{this.state.comments.text}</p>
      </div>
    );
  }
}

/* passed comments to the CommentSection through state*/

//returned the the comments username and text via state//

// added proptypes to check data//
CommentSection.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default CommentSection;
