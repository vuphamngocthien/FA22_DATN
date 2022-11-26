<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState,useEffect, createContext, Children,useContext } from "react";
>>>>>>> master/dev_Tang
import { Text, StyleSheet, View, TextInput, Button, Image } from "react-native";
import CheckBox from "expo-checkbox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import ProductNavigation from "../navigation/ProductNavigation";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
<<<<<<< HEAD
function Login({ props }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setData] = useState([]);

<<<<<<< HEAD
  useEffect(() => {
    onValue(ref(getDatabase(), "User/"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  }, []);

  const Login = () => {
    for (var i = 0; i <= data.length; i++) {
      if (Username == data[i].Email && Password == data[i].Password) {
        console.log("dang nhap thanh cong" + [data[i].Email, data[i].Password]);

        break;
      } else {
        console.log("dang nhap that bai" + data[i].Email);
      }
=======
import { UserContext } from "../../Components/UserContext";
export const LoginContext =createContext();

export const Login=(props)=> {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    
    const {login} =useContext(UserContext);
    

    const Login = async() => {
        const res =await login(Username,Password);
        if(res ==true){
            console.log('dang nhap thanh cong');
        }else{
            console.log('dang nhap that bai');
            console.log(res);
        }
>>>>>>> master/dev_Tang
    }
  };
  return (
    <View style={styles.parent}>
      <View style={styles.box}></View>
      <Text style={styles.welcome}>Welcome to CIliPhone</Text>
      <Text style={styles.continue}>Sign in to continue</Text>
      <View>
        <TextInput
          style={styles.email}
          placeholder="Your Email"
          value={Username}
          onChangeText={setUsername}
        />
        <Icon
          name={"email-outline"}
          style={{ fontSize: 26, position: "absolute", left: 20, bottom: 19 }}
        />
      </View>
      <View style={styles.password}>
        <TextInput
          style={styles.email}
          placeholder="Password"
          value={Password}
          onChangeText={setPassword}
        />
        <Icon
          name={"lock-outline"}
          style={{ fontSize: 26, position: "absolute", left: 20, bottom: 19 }}
        />
      </View>
      <View style={styles.rm_password}>
        <CheckBox style={styles.checkbox} />
        <Text style={styles.text_rm}>Remember Password</Text>
      </View>
      <View style={styles.btn_signin}>
        <Button title="Sign In" color="#FF6E4E" onPress={Login} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <View style={styles.line}></View>
        <Text style={{ color: "#9098B1", paddingLeft: 5 }}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.login_gg}>
        <Button
          color="rgba(235, 240, 255, 1)"
          title="Sign with Google"
          titleStyle={{ fontWeight: "700", color: "black" }}
        />
        <Image
          source={require("../../assets/Google.png")}
          style={{ width: 25, height: 25, marginTop: -30 }}
        />
      </View>
      <View style={styles.login_gg}>
        <Button
          color="rgba(235, 240, 255, 1)"
          title="Sign with facebook"
          titleStyle={{ fontWeight: "700", color: "black" }}
        />
        <Image
          source={require("../../assets/Facebook.png")}
          style={{ width: 25, height: 25, marginTop: -30 }}
        />
      </View>
      <Text
        style={{
          color: "rgba(255, 110, 78, 1)",
          fontWeight: "700",
          fontSize: 12,
          marginTop: 13,
        }}
      >
        Forgot Password
      </Text>
      <View style={{ flexDirection: "row", marginTop: 13 }}>
        <Text>Don't have an account?</Text>
        <Text
          style={{ color: "rgba(255, 110, 78, 1)", fontWeight: "700" }}
          onPress={() => navigation.navigate("Signup")}
        >
          Register
        </Text>
      </View>
    </View>
  );
=======
// const setDB = () => {
//     set(ref(database, "User"), {
//       hoten: "QuynhNhu",
//     });
//   };
function Login(props) {
const login =()=>{

}
    return (
        <View style={styles.parent}>
            <View style={styles.box}></View>
            <Text style={styles.welcome}>Welcome to CiliPhone</Text>
            <Text style={styles.continue}>Sign in to continue</Text>
            <View >
                <TextInput style={styles.email} placeholder="Your Email" />
                <Icon name={"email-outline"} style={{ fontSize: 26, position: "absolute", left: 20, bottom: 19 }} />
            </View>
            <View style={styles.password}>
                <TextInput style={styles.email} placeholder="Password" />
                <Icon name={"lock-outline"} style={{ fontSize: 26, position: "absolute", left: 20, bottom: 19 }} />
            </View>
            <View style={styles.rm_password}>
                <CheckBox style={styles.checkbox} />
                <Text style={styles.text_rm}>Remember Password</Text>
            </View>
            <View style={styles.btn_signin}>
                <Button title='Sign In' color='#FF6E4E' onPress={login} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                <View style={styles.line}></View>
                <Text style={{ color: '#9098B1', paddingLeft: 5 }}>OR</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.login_gg}>
                <Button
                    color='rgba(235, 240, 255, 1)'
                    title="Sign with Google"
                    titleStyle={{ fontWeight: "700", color: 'black' }} />
                <Image source={require('../../assets/Google.png')} style={{ width: 25, height: 25, marginTop: -30 }} />
            </View>
            <View style={styles.login_gg}>
                <Button
                    color='rgba(235, 240, 255, 1)'
                    title="Sign with facebook"
                    titleStyle={{ fontWeight: "700", color: 'black' }} />
                <Image source={require('../../assets/Facebook.png')} style={{ width: 25, height: 25, marginTop: -30 }} />
            </View>
                <Text style={{ color: 'rgba(255, 110, 78, 1)', fontWeight: "700", fontSize: 12,marginTop:13 }}>Forgot Password</Text>
                <View style={{flexDirection:'row',marginTop:13}}>
                    <Text>Don't have an account?</Text>
                    <Text style={{color:'rgba(255, 110, 78, 1)',fontWeight:"700"}}>Register</Text>
                </View>
        </View>
    );
<<<<<<< HEAD
>>>>>>> master/dev_Luan
}

=======

    
}
   
    
    
    





    

>>>>>>> master/dev_Tang
export default Login;

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
  rm_password: {
    width: 343,
    height: 48,
    flexDirection: "row",
    left: -85,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  text_rm: {
    paddingLeft: 10,
    color: "#9098B1",
  },
  btn_signin: {
    width: 343,
    height: 57,
    borderRadius: 5,
    marginTop: 10,
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
