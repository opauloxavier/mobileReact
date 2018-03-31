import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, CustomButton, Input, Spinner } from './common';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: '', 
            error: '', 
            loading: false
        };
    }

    onLogin = (status = true, error = '') => {
        if (status) {
            return this.setState({
                error,
                email: '',
                password: '',
                loading: false,
            });
        }
        return this.setState({ error: 'Authentication Failed', loading: false });
    }

    tryLogin = () => {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLogin)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLogin)
                    .catch(() => this.onLogin(false));
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return (
            <CustomButton onPress={this.tryLogin}>
                Log in
            </CustomButton>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secure
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        alignSelf: 'center',
        color: '#ff0000',
        fontSize: 16,
    }
};
