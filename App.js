import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
import { getDatabase, ref, set , push } from "firebase/database";
import Login from "./screens/authen/Login"
import Sign_up from "./screens/authen/Sign_up";
import Detailsproduct from "./screens/authen/Detailsproduct"
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./screens/product/HomeStack";

const Stack=createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="HomeStack">
        <Stack.Screen  name='Login' component={Login}/>
        <Stack.Screen name='HomeStack' component={HomeStack}/>
        <Stack.Screen name='Signup' component={Sign_up}/>
       </Stack.Navigator>
    </NavigationContainer>
    )
  
  

  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
