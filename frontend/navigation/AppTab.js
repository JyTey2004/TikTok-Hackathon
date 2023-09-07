import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AppStack from './AppStack';
import HealthInfoScreen from '../screens/HealthInfoScreen';
import UserHealthScreen from '../screens/UserHealthScreen';
import ServicesScreen from '../screens/ServicesScreen';
import HealthEnquiryScreen from '../screens/HealthEnquiryScreen';

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
            } else if (route.name === 'Add') {
                iconName = focused 
                ? 'add'
                : 'add-outline';
                size = 35;
            } else if (route.name === 'Status') {
                iconName = focused 
                ? 'person'
                : 'person-outline';
            } else if (route.name === 'Services') {
                iconName = focused 
                ? 'basket'
                : 'basket-outline';
            } else if (route.name === 'Enquiry') {
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
                } return {
                backgroundColor: '#1f2937',
                borderTopColor: 'transparent',
                }
            })(route),
            })}
        />
        <AppTabNav.Screen name="Services" component={ServicesScreen} />
        <AppTabNav.Screen name="Add" component={HealthInfoScreen} />
        <AppTabNav.Screen name="Enquiry" component={HealthEnquiryScreen} />
        <AppTabNav.Screen name="Status" component={UserHealthScreen} />
        
    </AppTabNav.Navigator>
  )
}

export default AppTab