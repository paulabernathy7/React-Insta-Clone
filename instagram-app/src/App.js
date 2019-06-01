import React from "react";
import logo from "./logo.svg";
import dummyData from "./dummy-data";
import PostPage from "./components/PostContainer/PostPage";
import { id } from "postcss-selector-parser";
import withAuthenticate from "./authentication/withAuthenticate";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      username: ""
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}
export default withAuthenticate(App);
