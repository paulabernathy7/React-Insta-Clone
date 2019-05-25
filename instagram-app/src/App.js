import React from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import { id } from "postcss-selector-parser";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  // mounted the component below after setting the dummyData to an array//
  componentDidMount() {
    this.setState({ dummyData });
  }

  render() {
    {
      /*mapped using this.state over our dummydata and passed it to post container. naming the item post */
    }
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        {this.state.dummyData.map(item => {
          console.log(item);
          return <PostContainer key={item.timestamp} post={item} />;
        })}
      </div>
    );
  }
}
export default App;
