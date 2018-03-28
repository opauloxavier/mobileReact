import React from 'react';
import { View } from 'react-native';
import Header from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title={'Auth'} />
      </View>
    );
  }
}
