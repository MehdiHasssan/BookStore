import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import Testing from '../screens/Testing';


const Stack = createNativeStackNavigator();



const StackNavigation = () => {
  return (
    
     <Stack.Navigator>
      <Stack.Screen
       name="BottomTab" component={BottomTabNavigation} 
       options={{headerShown:false}}
       
       />
      <Stack.Screen name="Testing" component={Testing} />
    </Stack.Navigator> 
    
   
  )
}

export default StackNavigation

const styles = StyleSheet.create({})