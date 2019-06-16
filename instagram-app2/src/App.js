import React from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./authentication/withAuthenticate";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return <PostPage />;
  }
}
export default withAuthenticate(App);
