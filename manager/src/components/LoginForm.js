import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { authUpdate, loginUser } from '../actions';
import { CardSection, Input, Card, CustomButton, Spinner } from './common';


class LoginForm extends Component {
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderSpinner() {
        if (this.props.loading) {
            return <Spinner size='small' />;
        }

        return (
            <CustomButton onPress={this.onButtonPress.bind(this)}>
                Login
            </CustomButton>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={
                            (text) => 
                                this.props.authUpdate({ prop: 'email', value: text })
                            }
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secure
                        label='Password'
                        placeholder='password'
                        onChangeText={
                            (text) => 
                                this.props.authUpdate({ prop: 'password', value: text })
                            }
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderSpinner()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;

    return { email, password, error, loading };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

export default connect(mapStateToProps, { authUpdate, loginUser })(LoginForm);
