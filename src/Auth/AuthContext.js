import React, { Component } from "react";
import axios from "axios";

const apiAuthHandler = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = { loginStatus: {}, user: null };

  isLoggedin = () => {
    apiAuthHandler
      .get("/auth/loggedIn")
      .then(serverRes => {
        console.log("yo", serverRes);
        this.updateState(serverRes.data);
      })
      .catch(serverErr => console.log(serverErr.response));
  };

  logIn = (clbk, data) => {
    apiAuthHandler
      .post("/auth/login", data)
      .then(async serverRes => {
        await this.updateState(serverRes.data);
        console.log(serverRes);
        clbk(serverRes.data.loginStatus);
      })
      .catch(serverErr => {
        console.log(serverErr.response);
        this.setState({ isLoggedIn: false }, () => {
          clbk(serverErr.response);
        });
      });
  };

  logOut = clbk => {
    // send a request to the server : session will be destroyed there
    apiAuthHandler.post("/auth/logout").then(serverRes => {
      this.setState({ loginStatus: false }, () => clbk(this.isLoggedIn));
    });
  };

  componentDidMount = () => {
    this.isLoggedin();
  };

  get user() {
    return this.state.user;
  }

  updateState(data) {
    const { loginStatus, user } = data;
    this.setState({ loginStatus: loginStatus, user: user });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.user,
          loginStatus: this.state.loginStatus,
          isLoggedIn: this.isLoggedIn,
          logIn: this.logIn,
          logOut: this.logOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
