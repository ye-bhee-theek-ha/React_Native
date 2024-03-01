---
to: src/navigation/<%= name %>.js
unless_exists: true
---
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

function <%= Name %>() {
  const Stack = createNativeStackNavigator();

  const screens = {};

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

export default <%= Name %>;
