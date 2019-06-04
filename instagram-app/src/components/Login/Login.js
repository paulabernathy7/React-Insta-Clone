import React from "react";
import { Button } from "reactstrap";

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
      <form>
        <h3>Welcome</h3>
        <h3>Please Login</h3>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleLoginSubmit}>Login</button>
      </form>
    );
  }
}

export default Login;
