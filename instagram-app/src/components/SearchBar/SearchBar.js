import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";
import PostContainer from "../PostContainer/PostContainer";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search">
      <div className="ig">
        <img
          className="logo"
          src="https://img.icons8.com/ios/50/000000/instagram-new-filled.png"
        />
        <h1 className="logo">Instagram</h1>
      </div>
      <input className="searchbar" placeholder="Search" type="text" />
      <div className="icons">
        <img
          className="icon"
          src="https://img.icons8.com/windows/32/000000/hearts.png"
        />
        <img
          className="icon"
          src="https://img.icons8.com/android/24/000000/compass.png"
        />
        <img
          className="icon"
          src="https://img.icons8.com/windows/32/000000/gender-neutral-user.png"
        />
      </div>
    </div>
  );
};

export default SearchBar;
