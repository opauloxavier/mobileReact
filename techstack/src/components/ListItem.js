import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, LayoutAnimation, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.textStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { title, id } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}> 
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    textStyle: {
        flex: 1
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
