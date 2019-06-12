import React from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostPage from "./components/PostContainer/PostPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
  }
}

export default App;
