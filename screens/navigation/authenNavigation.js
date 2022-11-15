import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();


import Login from '../authen/Login';
import Register from '../authen/Register';




const authenNavigation = () => {
    return (
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login "component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>   
    )
}

export default authenNavigation

const styles = StyleSheet.create({})
