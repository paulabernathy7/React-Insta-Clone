import React from "react";
import "./PostContainer.css";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
// import { id } from "postcss-selector-parser";
import SearchBar from "../SearchBar/SearchBar";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      search: "",
      filteredPosts: []
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

  inputHandler = event => {
    this.setState({
      search: event.target.value
    });
  };

  searchHandler = event => {
    console.log("event", event.target.value);

    this.setState({
      search: event.target.value
    });
    console.log("state", this.state);
    console.log("event2", event.target.value);
    // const posts = this.state.dummyData.filter(item => {
    //   item.username.includes(event.target.value);
    // });
    const posts = this.state.dummyData.filter(item => item !== 0);
    this.setState({ filteredPosts: posts });
    console.log("posts", posts);
    console.log("filtered", this.state.filteredPosts);
  };

  render() {
    {
      /*mapped using this.state over our dummydata and passed it to post container. naming the item post */
    }
    return (
      <div className="App">
        <div>
          <SearchBar
            posts={this.state.post}
            searchHandler={this.searchHandler}
            inputHandler={this.inputHandler}
          />
        </div>
        {this.state.dummyData.map(item => {
          // console.log(item);
          return (
            <PostContainer
              posts={
                this.state.filteredPosts.length > 0
                  ? this.state.filteredPosts
                  : this.state.post
              }
              key={item.timestamp}
              post={item}
            />
          );
          {
            /* added unique time stanp key to get rid of the warning*/
          }
        })}
      </div>
    );
  }
}
export default PostPage;
