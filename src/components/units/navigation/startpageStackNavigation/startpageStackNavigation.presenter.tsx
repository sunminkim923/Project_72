// import {createNativeStasckNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainLoginPage from '../../../../../pages/screens/login';
import SignUpPage from '../../screens/signUpPage/SignUp.container';

const Stack = createNativeStackNavigator();
const StartPageStackNavigationUI = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="Login" component={MainLoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StartPageStackNavigationUI;
