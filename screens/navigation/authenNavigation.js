import React,{createContext,useContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();


import Login from '../authen/Login';
import Sign_up from '../authen/Sign_up';
import Detailsproduct from '../product/Detailsproduct';
import HomeStack from '../product/HomeStack';
import forgotPassword from '../authen/forgotPassword';
import Cart from '../Cart';
export const AuthContext=createContext();



export const  AuthenNavigation = () => {
    return (
        
                <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={Login}>
                  
                    <Stack.Screen name="Login"component={Login} />
                    <Stack.Screen name="Register" component={Sign_up} />
                    <Stack.Screen name="Detailsproduct" component={Detailsproduct} options={{headerShown: false}}/>
                    <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
                    <Stack.Screen name="forgotPassword" component={forgotPassword} options={{headerShown: false}}/>
                </Stack.Navigator>  
        
                
                // <AuthContext.Provider value={{text}}>
                //     {Children}
                // </AuthContext.Provider> 
    )
}
export default AuthenNavigation;



