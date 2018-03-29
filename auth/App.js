import React from 'react';
import { View, Text } from 'react-native';
import { Header, CardSection, Card, CustomButton } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header title={'Auth'} />
        <CardSection>
          <Card>
            <Text>
              Login
            </Text>
          </Card>
          <Card>
            <Text>
              Password
            </Text>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <CustomButton onPress={() => console.log('CLICK')}>
              Clique Aqui
            </CustomButton>
          </Card>
        </CardSection>
      </View>
    );
  }
}
