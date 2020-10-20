import { StatusBar } from 'expo-status-bar';
import React from 'react';

import CreateAccountScreen from './screens/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NewAccountScreen from './screens/NewAccountScreen';

import Navigator from './nav'

export default function App() {
  return (
    <Navigator />
  );
  
}

