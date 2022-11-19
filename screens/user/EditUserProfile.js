import { TextInput, Image, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const update = () => {

}

const EditUserProfile = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.userProfileImageContainer}>
                    <Image style={styles.userProfileImage} source={require('../../assets/userImg1.png')}></Image>
                </View>
                <View style={styles.EditContainer}>
                    <View style={styles.NameEdit}>
                        <TextInput style={styles.NameInput} placeholder="Le Ba Luan" />
                        <Icon name={"account-outline"} style={{ fontSize: 24, position: "absolute", left: 24 , bottom: 24 }} />
                    </View>
                    <View style={styles.BirthEdit}>
                        <TextInput style={styles.BirthInput} placeholder="01 / 06 / 2002" />
                        <Icon name={"calendar-account"} style={{ fontSize: 24, position: "absolute", left: 24, bottom: 24 }} />
                    </View>
                    <View style={styles.EmailEdit}>
                        <TextInput style={styles.EmailInput} placeholder="01 / 06 / 2002" />
                        <Icon name={"email-outline"} style={{ fontSize: 24, position: "absolute", left: 24, bottom: 24 }} />
                    </View>
                    <View style={styles.AddressEdit}>
                        <TextInput style={styles.AddressInput} placeholder="01 / 06 / 2002" />
                        <Icon name={"home-outline"} style={{ fontSize: 24, position: "absolute", left: 24, bottom: 24 }} />
                    </View>
                    <View style={styles.PhoneEdit}>
                        <TextInput style={styles.PhoneInput} placeholder="01 / 06 / 2002" />
                        <Icon name={"phone-outline"} style={{ fontSize: 24, position: "absolute", left: 24, bottom: 24 }} />
                    </View>
                    <View style={styles.btn_Save}>
                        <Button title='Save' color='#fff' onPress={update}></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditUserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    userProfileImageContainer: {

    },
    userProfileImage: {
        height: 142,
        width: 142,
        borderRadius: 75
    },
    NameInput: {
        value: { Text },
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 40,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: "400",
        color: '#9098B1',
        borderRadius: 5
    },
    BirthInput: {
        value: { Text },
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 8,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: "400",
        color: '#9098B1',
        borderRadius: 5
    },
    EmailInput: {
        value: { Text },
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 8,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: "400",
        color: '#9098B1',
        borderRadius: 5
    },
    AddressInput: {
        value: { Text },
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 8,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: "400",
        color: '#9098B1',
        borderRadius: 5
    },
    PhoneInput: {
        value: { Text },
        margin: 12,
        borderWidth: 1,
        width: 343,
        height: 48,
        marginTop: 8,
        paddingLeft: 35,
        fontSize: 14,
        fontWeight: "400",
        color: '#9098B1',
        borderRadius: 5
    },
    btn_Save: {
        height: 57,
        width: 343,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    }
})