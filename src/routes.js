import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import Details from './Details';
import Repo from './Repo';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="Repos" component={Details} />
        <Stack.Screen name="Repo" component={Repo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
