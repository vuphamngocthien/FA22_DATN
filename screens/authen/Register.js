import { StyleSheet, Text, View,TextInput,Button,Image } from 'react-native';
import React from 'react';
const Register = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.box}></View>
            <Text style={styles.welcome}>Let's Get Started</Text>
            <Text style={styles.continue}>Create an new account</Text>
            <View >
                <TextInput style={styles.email} placeholder="Full Name" />
                <Image source={require('../../assets/User.png')}style={{ width: 25, height: 25, marginTop: -50,left:20,}} />
            </View>
            <View >
                <TextInput style={styles.email} placeholder="Your Email" />
                <Image source={require('../../assets/Message.png')}style={{ width: 25, height: 25, marginTop: -50,left:20,marginBottom:20}} />
            </View>
            <View style={styles.password}>
                <TextInput style={styles.email} placeholder="Password" />
                <Image source={require('../../assets/Password.png')}style={{ width: 25, height: 25, marginTop: -50,left:20,marginBottom:20}} />
            </View>
            
            <View style={styles.btn_signin}>
                <Button title='Sign In' color='#FF6E4E' />
            </View>
            <View style={{flexDirection:'row',marginTop:24}}>
                    <Text>Have an account?</Text>
                    <Text style={{color:'rgba(255, 110, 78, 1)',fontWeight:700}}>Sign In</Text>
                </View>
        </View>
    );
}

export default Register

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        alignItems: 'center',
        paddingTop: '50px',
        
    },
    box: {
        backgroundColor: '#FF6E4E',
        width: 76,
        height: 76,
        borderRadius: 10
    },
    welcome: {
        color: "#223263",
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 24
    },
    continue: {
        fontWeight: "400",
        fontSize: 12,
        color: '#9098B1',
        marginTop: 16
    },
    email: {
      
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 28,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: 400,
        color: '#9098B1',
        borderRadius: 5
    },
    password: {
        marginTop: -18
    },
    
    
    
    btn_signin: {
        width: 343,
        height: 57,
        borderRadius: 5,
        marginTop: 70,


    },
    line: {
        backgroundColor: '#EBF0FF',
        width: 160,
        height: 1,
        flex: 1,
        margin: 10
    },
    login_gg: {
        // flexDirection:'row',
        // alignItems:'center',
        // justifyContent:'space-between',
        width: 343,
        height: 38,
        borderWidth: 1,
        borderColor: 'rgba(235, 240, 255, 1)'
    },
})