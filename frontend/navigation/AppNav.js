import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppTab from './AppTab';

const AppNav = () => {
  return (
    <NavigationContainer>
      {
            <AppTab />
      }
    </NavigationContainer>
    
  )
}

export default AppNav