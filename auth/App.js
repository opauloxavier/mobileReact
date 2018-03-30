import React from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header, CardSection, Card, CustomButton } from './src/components/common';
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
      <View>
        <Header title={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}
