import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
<<<<<<< HEAD
import { getDatabase, ref, set, push } from "firebase/database";
import Login from "./screens/authen/Login";
import Sign_up from "./screens/authen/Sign_up";
import Detailsproduct from "./screens/authen/Detailsproduct";
import { NavigationContainer } from "@react-navigation/native";
import AuthenNavigation from "./screens/navigation/AuthenNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./screens/product/HomeStack";
<<<<<<< HEAD
=======
import { getDatabase, ref, set , push } from "firebase/database";
import Login from "./screens/authen/Login";
import ProfileStack from "./screens/product/ProfileStack";
import ProductNavigation from "./screens/navigation/ProductNavigation";
import authenNavigation from "./screens/navigation/authenNavigation";
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./screens/product/HomeStack";
import EditUserProfile from "./screens//user/EditUserProfile"

>>>>>>> master/dev_Luan

const Stack = createNativeStackNavigator();
export default function App() {
<<<<<<< HEAD
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{ headerShown: false }}
    //     initialRouteName="Login"
    //   >
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="HomeStack" component={HomeStack} />
    //     <Stack.Screen name="Signup" component={Sign_up} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <AuthenNavigation />
    </NavigationContainer>
  );
=======
=======
import ProductNavigation from "./screens/navigation/ProductNavigation";
import { UserContext } from "./Components/UserContext";
import { UserContextProvider } from "./Components/UserContext";
import Navigation from "./screens/navigation/Navigation";
const Stack=createNativeStackNavigator();
export default function App() {
 
 
  return(
    // <NavigationContainer>
    //    <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="HomeStack">
    //     <Stack.Screen  name='Login' component={Login}/>
    //     <Stack.Screen name='HomeStack' component={HomeStack}/>
    //     <Stack.Screen name='Signup' component={Sign_up}/>
    //    </Stack.Navigator>
    // </NavigationContainer>
    <UserContextProvider>
     <Navigation/>
    </UserContextProvider>
    )
  
>>>>>>> master/dev_Tang
  

  const setDB = () => {
    set(ref(database, "User"), {
      Address: "ha noi",
      Birth: "15/09/2002",
      Email: "dasdd",
      Money: 200,
      Password: "QuynhNhu",
      Phone_number: 123,
      User_id: "us3",
      User_name :" pham ngoc thein vu",
      User_picture: "dassads",
    });
  }
  const pushDB = () => {
    push(ref(database, "User"), {
      hoten: "QuynhNhu",
    });
  };
  return (
    <EditUserProfile />
  );
  
  
>>>>>>> master/dev_Luan
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
