import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';
// import { Provider, connect } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import Deck from './src/components/Deck';
// import reducers from './src/reducers';
// import { fetchData } from './src/actions/';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.data = [
      { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
      { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
      { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
      { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
      { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
      { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
      { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
      { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    ];
  }

  componentWillReceiveProps() {
    //this.props.fetchData();
    
  }

  renderCard(item) {
    const { text, uri, id } = item;

    return (
      <Card
        key={id}
        title={text}
        image={{ uri }}
      >
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="Example now!"
        />
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Deck renderCard={this.renderCard} data={this.data} />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { data } = state;

//   return { data };
// };

//export default connect(mapStateToProps, { fetchData })(App);
