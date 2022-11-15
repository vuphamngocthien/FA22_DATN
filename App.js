import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { app } from "./Components/FirebaseConfig";
import { getDatabase, ref, set , push } from "firebase/database";

export default function App() {
  const database = getDatabase();

  const setDB = () => {
    set(ref(database, "User"), {
      hoten: "QuynhNhu",
    });
  };
  const pushDB = () => {
    push(ref(database, "User"), {
      hoten: "QuynhNhu",
    });
  };
g
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pushDB}>
        <Text>set DB</Text>
      </TouchableOpacity>
    </View>
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
