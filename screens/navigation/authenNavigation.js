import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();


import Login from '../authen/Login';
import Sign_up from '../authen/Sign_up';





const AuthenNavigation = () => {
    return (
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login "component={Login} />
                    <Stack.Screen name="Register" component={Sign_up} />
                </Stack.Navigator>   
    )
}

export default AuthenNavigation

const styles = StyleSheet.create({})
