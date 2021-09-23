import React from 'react';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default Routes;
