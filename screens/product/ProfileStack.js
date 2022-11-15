
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
const ProfileStack = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image style={styles.userImg} source={require('../../assets/images/userImg1.jpg')}></Image>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Le Ba Luan</Text>
                        <Text style={styles.userMoney}>$100.00</Text>
                        <TouchableOpacity style={styles.userRecharge}>Recharge</TouchableOpacity>
                    </View>
                </View>
                <View style={styles.funtion}>
                    <View style={styles.language}>
                        <Image style={styles.languageIcon} source={require('')}></Image>
                        <Text style={styles.languageText}>Language</Text>
                        <select value={selects} style={styles.languageSelect}>
                            <option value={selectsEN}>EN</option>
                            <option value={selectsVN}>VN</option>
                        </select>
                    </View>
                    <View style={styles.mode}>
                        <Image style={styles.modeIcon} source={require('')}></Image>
                        <Text style={styles.modeText}>Mode</Text>
                        <Image style={styles.modeSwitch} source={require('')}></Image>
                    </View>
                    <View style={styles.notifications}>
                        <Image style={styles.notificationsIcon} source={require('')}></Image>
                        <Text style={styles.notificationsText}>Notifications</Text>
                        <Image style={styles.notificationsSwitch} source={require('')}></Image>
                    </View>
                    <View style={styles.favorite}>
                        <Image style={styles.favoriteIcon} source={require('')}></Image>
                        <Text style={styles.favoriteText}>Favorite</Text>
                    </View>
                    <View style={styles.history}>
                        <Image style={styles.historyIcon} source={require('')}></Image>
                        <Text style={styles.historyText}>History</Text>
                    </View>
                    <View style={styles.changePassword}>
                        <Image style={styles.changePasswordIcon} source={require('')}></Image>
                        <Text style={styles.changePasswordText}>Change Password</Text>
                    </View>
                    <View style={styles.support}>
                        <Image style={styles.supportIcon} source={require('')}></Image>
                        <Text style={styles.supportText}>Support</Text>
                    </View>
                    <View style={styles.logout}>
                        <Image style={styles.logoutIcon} source={require('')}></Image>
                        <Text style={styles.logoutText}>Logout</Text>
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
        fontSize: 20,
        color: '#333333'
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    userInfo: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    userMoney: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10
    },
    userRecharge: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5
    },
    funtion: {
        color: '#2e64e5'
    },
    language: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    languageIcon: {
        justifyContent: 'center'
    },
    languageText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    languageSelect: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
    },
    mode: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    modeIcon: {
        justifyContent: 'center'
    },
    modeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    modeSwitch: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
    },
    notifications: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    notificationsIcon: {
        justifyContent: 'center'
    },
    notificationsText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    notificationsSwitch: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center'
    },
    favorite: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    favoriteIcon: {
        justifyContent: 'center'
    },
    favoriteText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    history: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    historyIcon: {
        justifyContent: 'center'
    },
    historyText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    changePassword: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    changePasswordIcon: {
        justifyContent: 'center'
    },
    changePasswordText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    support: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    supportIcon: {
        justifyContent: 'center'
    },
    supportText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    logout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20
    },
    logoutIcon: {
        justifyContent: 'center'
    },
    logoutText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
})



