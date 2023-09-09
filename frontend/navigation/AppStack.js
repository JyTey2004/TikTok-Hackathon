import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CheckoutScreen from '../screens/StackScreens/CheckoutScreen'

const AppStack = () => {
    const AppStackNav = createStackNavigator()
  return (
    <AppStackNav.Navigator>
        <AppStackNav.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <AppStackNav.Screen name="CheckoutScreen" component={CheckoutScreen} options={{headerShown: false, presentation: 'modal'}}/>
    </AppStackNav.Navigator>
  )
}

export default AppStack