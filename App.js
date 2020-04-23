import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider, Button, BottomNavigation} from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={topNavList}>
      <ListStack.Screen name="List" component={ListScreen}/>
    </ListStack.Navigator>

  );
}
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={topNavHome}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
  )
}
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar/>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#000000' }}>

          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ 
            tabBarIcon: ({color}) => (<Ionicons name="ios-home" color={color} size={26}/>)
          }}/>
          <Tab.Screen
            name="Lists"
            component={ListStackScreen}
            options={{ 
            tabBarIcon: ({color}) => (<Ionicons name="ios-notifications" color={color} size={26}/>)
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const topNavHome = {
  headerStyle: {
    backgroundColor: '#18191A'
  },
  headerTintColor: '#fff',
  headerTintStyle: {
    fontWeight: 'bold'
  },
  gestureEnabled: true
}
const topNavList = {
  headerStyle: {
    backgroundColor: '#18191A'
  },
  headerTintColor: '#fff',
  headerTintStyle: {
    fontWeight: 'bold'
  },
  gestureEnabled: true
}
const theme = {
  ...DefaultTheme,
  dark: 'true',
  mode: 'exact',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow'
  }
};
export default App;
