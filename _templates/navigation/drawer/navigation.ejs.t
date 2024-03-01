---
to: src/navigation/drawers/<%= name %>.js
unless_exists: true
---
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

function <%= Name %>() {
  // Please make sure you follow all the instructions from this link https://reactnavigation.org/docs/drawer-navigator/
  const Drawer = createDrawerNavigator();

  const screens = {};

  return (
    <Drawer.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        drawerItemStyle: {},
        drawerLabelStyle: {},
        drawerContentContainerStyle: {},
        drawerContentStyle: {},
        drawerStyle: {},
      }}>
      {Object.entries(screens).map(([name, component]) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

export default <%= Name %>;
