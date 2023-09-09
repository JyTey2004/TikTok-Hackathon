import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AppStack from './AppStack';
import CreateScreen from '../screens/CreateScreen';
import UserScreen from '../screens/UserScreen';
import ShopScreen from '../screens/ShopScreen';
import InboxScreen from '../screens/InboxScreen';

const AppTab = () => {
    const AppTabNav = createBottomTabNavigator();
  return (
    <AppTabNav.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'Home') {
                iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Create') {
                iconName = focused 
                ? 'add'
                : 'add-outline';
                size = 35;
            } else if (route.name === 'User') {
                iconName = focused 
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Shop') {
                iconName = focused 
                ? 'basket'
                : 'basket-outline';
            } else if (route.name === 'Inbox') {
                iconName = focused 
                ? 'chatbox-ellipses'
                : 'chatbox-ellipses-outline';
            }
    
            // You can return any component that you like here!
            return <View style={{width: 45, alignItems: 'center'}}><Ionicons name={iconName} size={size} color={color} /></View>; // <Text style={{color: color}}>{route.name}</Text>
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            headerShown: false,
            tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: 'transparent',
            },
            position: 'absolute',
            tabBarLabel:() => {return null},
        })}
    >   
        <AppTabNav.Screen name="Home" component={AppStack} 
            options={({ route }) => ({
            tabBarStyle: ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                if (routeName === 'SnapScreen') {
                return { display: "none" }
                } else if (routeName === 'CommunityScreen') {
                return { display: "none" }
                }  else if (routeName === 'NotificationScreen') {
                return { display: "none" }
                } else if (routeName === 'CheckoutScreen') {
                return { display: "none" }
                } return {
                backgroundColor: '#1f2937',
                borderTopColor: 'transparent',
                }
            })(route),
            })}
        />
        <AppTabNav.Screen name="Shop" component={ShopScreen} />
        <AppTabNav.Screen name="Create" component={CreateScreen} />
        <AppTabNav.Screen name="Inbox" component={InboxScreen} />
        <AppTabNav.Screen name="User" component={UserScreen} />
        
    </AppTabNav.Navigator>
  )
}

export default AppTab