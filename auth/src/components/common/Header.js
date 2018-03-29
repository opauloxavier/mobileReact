import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
        const { textStyle, viewStyle } = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>);
}

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        elevation: 2,
        position: 'relative'
    }
};

export { Header };
