import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity ,Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const ProfileStack = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image style={styles.userImg} source={require('../testProject/assets/img/userImg1.png')}></Image>
                    <View style={styles.userInfo}>
                        <View>
                          <Text style={styles.userName}>Le Ba Luan</Text>
                        </View>
                        <View>
                          <Text style={styles.userMoney}>$100.00</Text>
                        </View>
                        <TouchableOpacity style={styles.userRecharge}>
                          <Text style={styles.userRechargeText}>Recharge</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.funtion}>
                    <View style={styles.language}>
                        <Image style={styles.languageIcon} source={require('../testProject/assets/img/internet.png')}></Image>
                        <View>
                          <Text style={styles.languageText}>Language</Text>
                        </View>
                        {/* <select value={selects} style={styles.languageSelect}>
                            <option value={selectsEN}>EN</option>
                            <option value={selectsVN}>VN</option>
                        </select> */}
                    </View>
                    <View style={styles.mode}>
                        <Image style={styles.modeIcon} source={require('../testProject/assets/img/dark-mode.png')}></Image>
                        <View>
                          <Text style={styles.modeText}>Mode</Text>
                        </View>
                        <Image style={styles.modeSwitch} ></Image>
                    </View>
                    <View style={styles.notifications}>
                        <Image style={styles.notificationsIcon} source={require('../testProject/assets/img/notification.png')}></Image>
                        <View>
                          <Text style={styles.notificationsText}>Notifications</Text>
                        </View>
                        <Image style={styles.notificationsSwitch} ></Image>
                    </View>
                    <View style={styles.favorite}>
                        <Image style={styles.favoriteIcon} source={require('../testProject/assets/img/lover.png')}></Image>
                        <View>
                          <Text style={styles.favoriteText}>Favorite</Text>
                        </View>
                    </View>
                    <View style={styles.history}>
                        <Image style={styles.historyIcon} source={require('../testProject/assets/img/history.png')}></Image>
                        <View>
                          <Text style={styles.historyText}>History</Text>
                        </View>
                    </View>
                    <View style={styles.changePassword}>
                        <Image style={styles.changePasswordIcon} source={require('../testProject/assets/img/password.png')}></Image>
                        <View>
                          <Text style={styles.changePasswordText}>Change Password</Text>
                        </View>
                    </View>
                    <View style={styles.support}>
                        <Image style={styles.supportIcon} source={require('../testProject/assets/img/support.png')}></Image>
                        <View>
                          <Text style={styles.supportText}>Support</Text>
                        </View>
                    </View>
                    <View style={styles.logout}>
                        <Image style={styles.logoutIcon} source={require('../testProject/assets/img/logout.png')}></Image>
                        <View>
                          <Text style={styles.logoutText}>Logout</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileStack

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20
    },
    user: {
      height: 142,
      width: '100%',
      flexDirection: 'row',
      marginTop: 48,
      //backgroundColor: 'red'
    },
    userImg: {
      height: 142,
      width: 142,
      borderRadius: 75
    },
    userInfo: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      paddingLeft: 80,
      justifyContent: 'center',
    },
    userName: {
      fontSize: 24,
    },
    userMoney: {
      fontSize: 20,
      paddingBottom: 28,
      padding: 14
    },
    userRecharge: {
        backgroundColor: 'orange',
        borderRadius: 28,
        height: 47,
        width: 127,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userRechargeText: {
      fontSize: 20,
    },
    funtion: {
      color: '#fff',
      width: '100%',
      marginTop: 31,
      //backgroundColor: 'blue'
    },
    language: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    languageIcon: {
      
    },
    languageText: {
      fontSize: 20,
      paddingLeft: 31
    },
    languageSelect: {
      
    },
    mode: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    modeIcon: {
  
    },
    modeText: {
      fontSize: 20,
      paddingLeft: 31
    },
    modeSwitch: {
      
    },
    notifications: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    notificationsIcon: {
      
    },
    notificationsText: {
      fontSize: 20,
      paddingLeft: 31
    },
    notificationsSwitch: {
      
    },
    favorite: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    favoriteIcon: {
      
    },
    favoriteText: {
      fontSize: 20,
      paddingLeft: 31
    },
    history: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    historyIcon: {
      
    },
    historyText: {
      fontSize: 20,
      paddingLeft: 31
    },
    changePassword: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    changePasswordIcon: {
      
    },
    changePasswordText: {
      fontSize: 20,
      paddingLeft: 31
    },
    support: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    supportIcon: {
      
    },
    supportText: {
      fontSize: 20,
      paddingLeft: 31
    },
    logout: {
      flexDirection: 'row',
      padding: 25,
      left: -25
    },
    logoutIcon: {
      
    },
    logoutText: {
      fontSize: 20,
      paddingLeft: 31
    },
  })



