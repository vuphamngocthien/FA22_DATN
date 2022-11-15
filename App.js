import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
import { getDatabase, ref, set , push } from "firebase/database";
import Login from "./screens/authen/Login";
import ProfileStack from "./screens/product/ProfileStack";
import ProductNavigation from "./screens/navigation/ProductNavigation";
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const database = getDatabase();

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
    <NavigationContainer>
    {
    <ProductNavigation />
}
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
