import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import _ from 'lodash';
import { Card, CardSection } from './common';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }

    keyExtractor({ uid }) {
        return String(uid);
    }

    renderEmployee({ item }) {
        const { name, phone, shift } = item;
        return (
            <CardSection>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{shift}</Text>
            </CardSection>
        );
    }

    render() {
        return (
            <Card>
                <FlatList
                    data={this.props.employees}
                    renderItem={this.renderEmployee}
                    keyExtractor={this.keyExtractor}
                />
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
