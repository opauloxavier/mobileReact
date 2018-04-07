import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhHB3RDsugdvDd4ZUgAWCcwADZKErcAvQ',
      authDomain: 'authentication-1d12f.firebaseapp.com',
      databaseURL: 'https://authentication-1d12f.firebaseio.com',
      projectId: 'authentication-1d12f',
      storageBucket: 'authentication-1d12f.appspot.com',
      messagingSenderId: '854108323856'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
          <Router />
      </Provider>
    );
  }
}
