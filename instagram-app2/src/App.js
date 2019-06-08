import React from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

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
  //passed searbar from searchbar
  render() {
    return (
      <div className="App">
        <div>
          <SearchBar />
        </div>
        {this.state.dummyData.map(item => {
          return <PostContainer post={item} />;
        })}
      </div>
    );
  }
}

export default App;
