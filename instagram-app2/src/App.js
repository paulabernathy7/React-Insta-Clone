import React from "react";
import logo from "./logo.svg";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    //key:value
    this.setState({ dummyData: dummyData });
  }

  // mapping over dummydate and passing each post to PostContainer
  render() {
    return (
      <div className="App">
        {this.state.dummyData.map(item => {
          return <PostContainer post={item} />;
        })}
      </div>
    );
  }
}

export default App;
