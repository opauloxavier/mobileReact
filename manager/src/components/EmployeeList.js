import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FlatList, Text, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { Card, CardSection } from './common';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }

    onRowPress(employee) {
        Actions.employeeEdit({ employee });
    }

    keyExtractor({ uid }) {
        return String(uid);
    }

    renderEmployee({ item }) {
        const { name } = item;

        return (
            <TouchableHighlight onPress={this.onRowPress.bind(this, item)}>
                <CardSection>
                    <Text style={styles.titleStyle}>{name}</Text>
                </CardSection>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <Card>
                <FlatList
                    data={this.props.employees}
                    renderItem={this.renderEmployee.bind(this)}
                    keyExtractor={this.keyExtractor}
                />
            </Card>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
