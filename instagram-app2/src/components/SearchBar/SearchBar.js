import React from "react";
import "./SearchBar.css";
import styled from "styled-components";

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #3333;
  margin-top: 50px;
  margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  margin-left: 50px;
`;

const Icons = styled.div`
  margin-right: 50px;
  margin-top: 30px;
`;

const SearchBar = props => {
  //created searchbar prop passed it to APP
  return (
    <Search>
      <Header>
        <img
          className="logo"
          src="https://img.icons8.com/color/48/000000/instagram-new.png"
        />
        <h1 className="logo">Instagram</h1>
      </Header>
      <form onSubmit={props.searchHandle}>
        <input
          className="searchbar"
          placeholder="Search"
          type="text"
          value={props.search}
          onChange={props.inputHandle}
        />
      </form>
      <Icons>
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
      </Icons>
    </Search>
  );
};

export default SearchBar;
