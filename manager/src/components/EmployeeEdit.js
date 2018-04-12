import _ from 'lodash';
import React, { Component } from 'react';
import { text } from 'react-native-communications';
import { connect } from 'react-redux';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';
import { Card, CardSection, CustomButton, Confirm } from './common/';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        text(phone, `Seu próximo turno será as ${shift}`);
    }

    onModalPress() {
        this.setState({ showModal: !this.state.showModal });
    }

    onConfirm() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState({ showModal: false });
    }

    render() { 
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <CustomButton onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </CustomButton>
                </CardSection>

                <CardSection>
                    <CustomButton onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </CustomButton>
                </CardSection>

                <CardSection>
                    <CustomButton onPress={this.onModalPress.bind(this)}>
                        Fire Employee
                    </CustomButton>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onDecline={this.onModalPress.bind(this)}
                    onAccept={this.onConfirm.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeEdit, employeeDelete })(EmployeeEdit);
