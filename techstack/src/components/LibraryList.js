import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    
    keyExtractor({ id }) {
        return String(id);
    }

    renderRow({ item }) {
        return <ListItem library={item} />;
    }

    render() {    
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderRow}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
