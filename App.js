import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
import { getDatabase, ref, set , push } from "firebase/database";
import Login from "./screens/authen/Login"
import Sign_up from "./screens/authen/Sign_up";
import Detailsproduct from "./screens/authen/Detailsproduct"

export default function App() {
  return <Detailsproduct/>

  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
