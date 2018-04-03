import React, { Component } from 'react';
import { View, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './src/components/common';
import reducers from './src/reducers';
import LibraryList from './src/components/LibraryList';

export default class App extends Component {

  constructor(props) {
    super(props);
    
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title='Tech Stack' />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
