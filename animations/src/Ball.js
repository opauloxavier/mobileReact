import React, { Component } from 'react';
import { View, Animated, TouchableHighlight } from 'react-native';

export default class Ball extends Component {

    constructor(props) {
        super(props);

        this.position = new Animated.ValueXY(0, 0); 
    }

    componentWillMount() {
      
    }

    animateBall() {
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <TouchableHighlight onPress={this.animateBall.bind(this)}>
                    <View style={styles.ball} />
                </TouchableHighlight>
            </Animated.View>
        );
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};
