import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, CustomButton } from './common';


export default class Logged extends Component {

    logOut = () => {
       firebase.auth().signOut();
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <CustomButton onPress={this.logOut}>
                        Logout
                    </CustomButton>
                </CardSection>
            </Card>
        );
    }
}

