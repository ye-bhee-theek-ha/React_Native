import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login01 from '../screens/Login01/Login01';
import Signup01 from '../screens/Signup01/Signup01';
import ResetPass from '../screens/ResetPass/ResetPass';

function AuthStack() {
  const Stack = createNativeStackNavigator();

  const screens = {
    login: Login01,
    signup : Signup01,
    resetPass: ResetPass 
  };

  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
        statusBarAnimation: 'fade',
        animation: 'slide_from_bottom',
        orientation: 'default',
        freezeOnBlur: true,
      }}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
