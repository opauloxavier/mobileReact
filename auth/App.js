import React, { Component } from "react";
import firebase from "firebase";
import { View } from "react-native";
import { Header, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import Logged from "./src/components/Logged";

export default class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDhHB3RDsugdvDd4ZUgAWCcwADZKErcAvQ",
      authDomain: "authentication-1d12f.firebaseapp.com",
      databaseURL: "https://authentication-1d12f.firebaseio.com",
      projectId: "authentication-1d12f",
      storageBucket: "authentication-1d12f.appspot.com",
      messagingSenderId: "854108323856",
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLogin = () => {
    switch (this.state.loggedIn) {
      case true:
        return <Logged />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  render() {
    return (
      <View>
        <Header title={"Authentication"} />
        {this.renderLogin()}
      </View>
    );
  }
}
