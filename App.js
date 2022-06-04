import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Home from './home';
import Details from './Details';
import Checkout from './checkout';
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';

export default function App({ navigation }) {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Landing" component={ Landing } />
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Details" component={ Details } />
        <Stack.Screen name="Details1" component={ Details1 } />
        <Stack.Screen name="Details2" component={ Details2 } />
        <Stack.Screen name="Details3" component={ Details3 } />
        <Stack.Screen name="Checkout" component={ Checkout } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}