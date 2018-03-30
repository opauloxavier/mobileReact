import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Card, CardSection, CustomButton } from './common';


export default class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <CustomButton>
                        Log in
                    </CustomButton>
                </CardSection>
            </Card>
        );
    }
}
