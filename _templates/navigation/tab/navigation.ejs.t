---
to: src/navigation/tabs/<%= name %>.js
unless_exists: true
---
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function <%= Name %>() {
  const Tab = createBottomTabNavigator();

  const screens = {};

  return (
    <Tab.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        freezeOnBlur: true,
        tabBarStyle: {},
      }}>
      {Object.entries(screens).map(([name, component]) => (
        <Tab.Screen key={name} name={name} component={component} />
      ))}
    </Tab.Navigator>
  );
}

export default <%= Name %>;
