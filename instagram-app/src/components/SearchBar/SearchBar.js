import React from "react";
import dummyData from "../../dummy-data";
import CommentSection from "../CommentSection/CommentSection";

const SearchBar = props => {
  return (
    <div className="search">
      <input placeholder="Search" type="text" />
    </div>
  );
};

export default SearchBar;
