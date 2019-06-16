import React from "react";
import "./login.css";

import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <Container>
        <form className="form">
          <h3>Welcome</h3>
          <h3>Please Login</h3>
          <input
            className="input"
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className="button" onClick={this.handleLoginSubmit}>
            Login
          </button>
        </form>
      </Container>
    );
  }
}

export default Login;
