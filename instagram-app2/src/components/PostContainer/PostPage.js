import React from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPosts: [],
      search: ""
    };
  }

  componentDidMount() {
    //key:value
    this.setState({ dummyData: dummyData });
  }

  inputHandle = event => {
    this.setState({
      search: event.target.value
    });
  };

  searchHandle = e => {
    e.preventDefault();
    const posts = this.state.dummyData.filter(p => {
      return p.username.includes(this.state.search);
    });
    this.setState({ filteredPosts: posts });
  };

  // mapping over dummydata and passing each post to PostContainer
  //passed searbar from searchbar
  render() {
    return (
      <div className="App">
        <div>
          <SearchBar
            // we need to read from state and write to state
            // search reads from state
            //input handle writes to state
            // searchHandle is our logic
            search={this.state.search}
            inputHandle={this.inputHandle}
            searchHandle={this.searchHandle}
          />
        </div>
        {/* map over filtered post to return each post and pass it to the post container*/}
        {/* added my ternary operator to right before I map with dummData.*/}
        {/* if fileredPost is greater than 0 return the filtered post*/}
        {/* otherwise return the dummmyData post which is all of them*/}

        {this.state.filteredPosts.length > 0
          ? this.state.filteredPosts.map(item => {
              return <PostContainer post={item} />;
            })
          : this.state.dummyData.map(item => {
              return <PostContainer post={item} />;
            })}
      </div>
    );
  }
}

export default PostPage;
