import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

<<<<<<< HEAD
function Sign_up({ props }) {
  const [Username, setUsername] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [data, Setdata] = useState([]);
  const Sign_up = () => {
    push(ref(getDatabase(), "User/"), {
      User_id: "null",
      User_name: Username,
      Email: UserEmail,
      Password: UserPassword,
      Birth: "null",
      User_picture: "null",
      Address: "null",
      Phone_number: "null",
      Money: "null",
=======

function Sign_up(props) {
    const [Username,setUsername]=useState('');
    const [UserEmail,setUserEmail]=useState('');
    const [UserPassword,setUserPassword]=useState('');
    const [data,Setdata]=useState([]);
const Sign_up=() =>{
    push(ref(getDatabase(),"User/"),{
        User_id:"null",
        User_name:Username,
        Email:UserEmail,
        Password:UserPassword,
        Birth:"null",
        User_picture:"null",
        Address:"null",
        Phone_number:"null",
        Money:"null"
>>>>>>> master/dev_Tang
    });
  };
  onValue(ref(getDatabase(), "User/"), (snapshot) => {
    Setdata(Object.values(snapshot.values()));
  });
  return (
    <View style={styles.parent}>
      <View style={styles.box}></View>
      <Text style={styles.welcome}>Let's Get Started</Text>
      <Text style={styles.continue}>Create an new account</Text>
      <View>
        <TextInput
          style={styles.email}
          placeholder="Full Name"
          onChangeText={setUsername}
        />
        <Image
          source={require("../../assets/User.png")}
          style={{ width: 25, height: 25, marginTop: -50, left: 20 }}
        />
      </View>
      <View>
        <TextInput
          style={styles.email}
          placeholder="Your Email"
          value={UserEmail}
          onChangeText={setUserEmail}
        />
        <Image
          source={require("../../assets/Message.png")}
          style={{
            width: 25,
            height: 25,
            marginTop: -50,
            left: 20,
            marginBottom: 20,
          }}
        />
      </View>
      <View style={styles.password}>
        <TextInput
          style={styles.email}
          placeholder="Password"
          value={UserPassword}
          onChangeText={setUserPassword}
        />
        <Image
          source={require("../../assets/Password.png")}
          style={{
            width: 25,
            height: 25,
            marginTop: -50,
            left: 20,
            marginBottom: 20,
          }}
        />
      </View>
      <TouchableOpacity>
        <View style={styles.btn_signin}>
          <Button title="Sign Up" color="#FF6E4E" onPress={Sign_up} />
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <Text>Have an account?</Text>
        <Text
          style={{ color: "rgba(255, 110, 78, 1)", fontWeight: "700" }}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}

export default Sign_up;

const styles = StyleSheet.create({
  parent: {
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
  },
  box: {
    backgroundColor: "#FF6E4E",
    width: 76,
    height: 76,
    borderRadius: 10,
  },
  welcome: {
    color: "#223263",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 24,
  },
  continue: {
    fontWeight: "400",
    fontSize: 12,
    color: "#9098B1",
    marginTop: 16,
  },
  email: {
    value: { Text },
    margin: 12,
    borderWidth: 1,
    width: 343,
    height: 48,
    marginTop: 28,
    paddingLeft: 35,
    fontSize: 14,
    fontWeight: "400",
    color: "#9098B1",
    borderRadius: 5,
  },
  password: {
    marginTop: -18,
  },
  btn_signin: {
    width: 343,
    height: 57,
    borderRadius: 5,
    marginTop: 70,
  },
  line: {
    backgroundColor: "#EBF0FF",
    width: 160,
    height: 1,
    flex: 1,
    margin: 10,
  },
  login_gg: {
    width: 343,
    height: 38,
    borderWidth: 1,
    borderColor: "rgba(235, 240, 255, 1)",
  },
});
