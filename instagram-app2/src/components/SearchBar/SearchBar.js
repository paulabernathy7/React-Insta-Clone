import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  //created searchbar prop passed it to APP
  return (
    <div className="search">
      <div className="ig">
        <img
          className="logo"
          src="https://img.icons8.com/color/48/000000/instagram-new.png"
        />
        <h1 className="logo">Instagram</h1>
      </div>
      <form onSubmit={props.searchHandle}>
        <input
          className="searchbar"
          placeholder="Search"
          type="text"
          value={props.search}
          onChange={props.inputHandle}
        />
      </form>
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
