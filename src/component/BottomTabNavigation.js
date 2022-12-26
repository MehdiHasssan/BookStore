import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Library from '../screens/Library';
import BookStore from '../screens/BookStore';
import SearchButton from '../screens/SearchButton';
import Icon from 'react-native-vector-icons/Ionicons';

// to hide bottom tab bar in a specific screen we use this "options={{tabBarStyle: { display: "none" },}}"

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
    <Tab.Screen name="Home" component={HomeScreen} 
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
       <Icon name="home" color={color} size={size} />
     ),
     headerStyle: {
      backgroundColor: '#f4511e', // set the background color of the header
    },
    headerTintColor: '#fff', // set the text color of the header
    headerTitleStyle: {
      fontWeight: 'bold', // set the font weight of the header title
    },
   }}  
   />
    <Tab.Screen name="library" component={Library} 
     options={{
     tabBarLabel: 'Library',
     tabBarIcon: ({ color, size }) => (
      <Icon name="library" color={color} size={size} />
    ),
    headerStyle: {
      backgroundColor: '#f4511e', // set the background color of the header
    },
    headerTintColor: '#fff', // set the text color of the header
    headerTitleStyle: {
      fontWeight: 'bold', // set the font weight of the header title
    },
  }}
    />
    <Tab.Screen name="bookStore" component={BookStore} 
    
     options={{
      tabBarLabel: 'bookStore',
      tabBarIcon: ({ color, size }) => (
       <Icon name="logo-apple-appstore" color={color} size={size} />
     ),
     headerStyle: {
      backgroundColor: '#f4511e', // set the background color of the header
    },
    headerTintColor: '#fff', // set the text color of the header
    headerTitleStyle: {
      fontWeight: 'bold', // set the font weight of the header title
    },
     
   }}
   />
    <Tab.Screen name="search" component={SearchButton} 
    options={{
      tabBarLabel: 'Library',
      tabBarIcon: ({ color, size }) => (
       <Icon name="search" color={color} size={size} />
     ),
     headerStyle: {
      backgroundColor: '#f4511e', // set the background color of the header
    },
    headerTintColor: '#fff', // set the text color of the header
    headerTitleStyle: {
      fontWeight: 'bold', // set the font weight of the header title
    },
   }} 
    />
  
  </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})