import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

// mounted the component below after setting the dummyData to an array// 
componentDidMount() {
  this.setState({dummyData})
}


render() {
  return (
    <div>
      {this.state.dummyData.map(item => {
        return (
         <PostContainer post={item}/>
        )
      })}
    </div>
  );

}




}
export default  App;