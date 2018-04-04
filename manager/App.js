import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
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
      <Provider store={createStore(reducers)} >
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
