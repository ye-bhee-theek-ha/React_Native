---
to: src/navigation/<%= name %>.js
unless_exists: true
---
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function <%= Name %>() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const stackScreens = {};

  const tabScreens = {};

  // You can name it according to your need
  function HomeTabs() {
    return (
      <Tab.Navigator
        initialRouteName=""
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          freezeOnBlur: true,
          tabBarStyle: {},
        }}>
        {Object.entries(tabScreens).map(([name, component]) => (
          <Tab.Screen key={name} name={name} component={component} />
        ))}
      </Tab.Navigator>
    );
  }

  const stackWithTabScreens = {HomeTabs, ...stackScreens}

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
      {Object.entries(stackWithTabScreens).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}

export default <%= Name %>;
