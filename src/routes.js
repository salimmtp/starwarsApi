import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import List from '../src/screens/List';
import Planet from '../src/screens/Planet';
import Form from '../src/screens/Form';

const Stack = createStackNavigator();

const PlanetStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Planets" component={List} />
    <Stack.Screen name="Details" component={Planet} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={PlanetStack} />
      <Tab.Screen name="Form" component={Form} />
    </Tab.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
