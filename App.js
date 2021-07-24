import React from 'react';
import { Routes } from './src/routes/Router2';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}