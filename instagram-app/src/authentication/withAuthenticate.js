import React from "react";
import App from "../App";
import Login from "../components/Login/Login";

const withAuthenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <Login />;
    }
  };

export default withAuthenticate;
