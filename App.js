import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import dnsScreen from './app/screens/dnsScreen';
import login from './app/screens/login';
import YardAreaList from './app/screens/YardAreaList';
import RowDetails from './app/screens/RowDetails';
import ReeferDetails from './app/screens/ReeferDetails';






const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home Screen">
                <Stack.Screen name="Home Screen" component={WelcomeScreen} />
                <Stack.Screen name="dnsScreen" component={dnsScreen} />
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="YardAreaList" component={YardAreaList} />
                <Stack.Screen name="RowDetails" component={RowDetails} />
                <Stack.Screen name="ReeferDetails" component={ReeferDetails} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


