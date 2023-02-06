import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParams} from 'common/models/types';

import HomeScreen from 'screens/Home';
import LoginScreen from 'screens/Login';

const RootStack = createNativeStackNavigator<RootStackParams>();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{headerShown: false}}>
          <RootStack.Screen name="LOGIN" component={LoginScreen} />
          <RootStack.Screen name="HOME" component={HomeScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
