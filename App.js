import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
<<<<<<< HEAD
import { getDatabase, ref, set, push } from "firebase/database";
import Login from "./screens/authen/Login";
import ProfileStack from "./screens/product/ProfileStack";
import ProductNavigation from "./screens/navigation/ProductNavigation";
import authenNavigation from "./screens/navigation/authenNavigation";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./screens/product/HomeStack";
import Order from "./screens/product/Order";
=======
import { getDatabase, ref, set , push } from "firebase/database";
import Login from "./screens/authen/Login"
import Sign_up from "./screens/authen/Sign_up";
import Detailsproduct from "./screens/authen/Detailsproduct"
import { NavigationContainer } from "@react-navigation/native";
>>>>>>> master/dev_Tang

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();
export default function App() {
<<<<<<< HEAD
  const setDB = () => {
    set(ref(database, "User"), {
      Address: "ha noi",
      Birth: "15/09/2002",
      Email: "dasdd",
      Money: 200,
      Password: "QuynhNhu",
      Phone_number: 123,
      User_id: "us3",
      User_name: " pham ngoc thein vu",
      User_picture: "dassads",
    });
  };
  const pushDB = () => {
    push(ref(database, "User"), {
      hoten: "QuynhNhu",
    });
  };
  return <Order />;
=======
  return(
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="Login">
        <Stack.Screen  name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Sign_up}/>
       </Stack.Navigator>
    </NavigationContainer>
    )
  
  

  
  
>>>>>>> master/dev_Tang
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
