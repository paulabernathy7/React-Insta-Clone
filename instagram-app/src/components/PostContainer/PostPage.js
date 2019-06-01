import React from "react";
import "./PostContainer.css";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import { id } from "postcss-selector-parser";
import SearchBar from "../SearchBar/SearchBar";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  // mounted the component below after setting the dummyData to an array//
  componentDidMount() {
    //this.setState({dummyData: dummyData})
    //key = dummyData from the state
    //value = dummyData from the dummyData imported on line 4
    // when key is the same as the value you can use thhis.setState({dummyData})
    this.setState({ dummyData: dummyData });
  }

  render() {
    {
      /*mapped using this.state over our dummydata and passed it to post container. naming the item post */
    }
    return (
      <div className="App">
        <div>
          <SearchBar />
        </div>
        {this.state.dummyData.map(item => {
          console.log(item);
          return <PostContainer key={item.timestamp} post={item} />;
          {
            /* added unique time stanp key to get rid of the warning*/
          }
        })}
      </div>
    );
  }
}
export default PostPage;
