import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { createAppContainer   } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './App-Home.js'

const RootStack = createStackNavigator({
  Home:        { screen: Home },
  }
);
const App = createAppContainer(RootStack);

export default App;
