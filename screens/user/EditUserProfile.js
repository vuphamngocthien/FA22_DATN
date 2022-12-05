import {
    TextInput,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Pressable,
  } from "react-native";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";
  import React from "react";
  import ImagePicker from "react-native-image-picker";
  
  import { UserContext } from "../../Components/UserContext";
  import { useEffect, useState, useContext } from "react";
  
  const EditUserProfile = (props) => {
    const { navigation } = props;
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const selectImage = () => {
      const options = {
        maxWidth: 2000,
        maxHeight: 2000,
        storageOptions: {
          skipBackup: true,
          path: "images",
        },
      };
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else if (response.customButton) {
          console.log("User tapped custom button: ", response.customButton);
        } else {
          const source = { uri: response.uri };
          console.log(source);
          setImage(source);
        }
      });
    };
  
    const [data, setData] = useState([]);
    const {
      user_id,
      user_money,
      user_image,
      user_name,
      getUser,
      address,
      Birth,
      email,
      Phone_number,
      UpdateUser,
    } = useContext(UserContext);
  
    const [name, setUser_name] = useState("");
    const [birth, setBirth] = useState("");
    const [Email, setEmail] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const update = async () => {
      const res = await UpdateUser(name, birth, Email, Address, Phone);
      if (res == true) {
        console.log("chinh sua thanh cong");
      }
    };
  
    useEffect(() => {
      setUser_name(user_name);
      setBirth(Birth);
      setEmail(email);
      setAddress(address);
      setPhone(Phone_number);
    }, []);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.orderBar}>
          <Pressable onPress={() => navigation.goBack()}>
            <View style={styles.Icon}>
              <Image
                style={styles.Icon}
                resizeMode="cover"
                source={require("../../assets/images/backIcon.png")}
              />
            </View>
          </Pressable>
          <Text style={styles.TextOrderBar}> My Profile </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.userProfileImageContainer}>
            <Image
              style={styles.userProfileImage}
              source={require("../../assets/userImg1.png")}
            ></Image>
          </View>
          <View style={styles.EditContainer}>
            <View style={styles.NameEdit}>
              <TextInput
                style={styles.NameInput}
                onChangeText={setUser_name}value={name}
                />
                <Icon
                  name={"account-outline"}
                  style={{
                    fontSize: 24,
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                  }}
                />
              </View>
              <View style={styles.BirthEdit}>
                <TextInput
                  style={styles.BirthInput}
                  onChangeText={setBirth}
                  value={birth}
                />
                <Icon
                  name={"calendar-account"}
                  style={{
                    fontSize: 24,
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                  }}
                />
              </View>
              <View style={styles.EmailEdit}>
                <TextInput
                  style={styles.EmailInput}
                  onChangeText={setEmail}
                  value={Email}
                />
                <Icon
                  name={"email-outline"}
                  style={{
                    fontSize: 24,
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                  }}
                />
              </View>
              <View style={styles.AddressEdit}>
                <TextInput
                  style={styles.AddressInput}
                  onChangeText={setAddress}
                  value={Address}
                />
                <Icon
                  name={"home-outline"}
                  style={{
                    fontSize: 24,
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                  }}
                />
              </View>
              <View style={styles.PhoneEdit}>
                <TextInput
                  style={styles.PhoneInput}
                  onChangeText={setPhone}
                  value={Phone}
                />
                <Icon
                  name={"phone-outline"}
                  style={{
                    fontSize: 24,
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                  }}
                />
              </View>
              <View style={styles.btn_Save}>
                <Button title="Save" color="red" onPress={update}></Button>
              </View>
            </View>
          </View>
        </SafeAreaView>
      );
    };
    
    export default EditUserProfile;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      },
      orderBar: {
        width: "100%",
        height: 50,
        textAlign: "center",
        flexDirection: "row",
        marginTop: 60,
        paddingLeft: 10,
      },
    
      TextOrderBar: {
        fontSize: 18,
        alignSelf: "center",
        marginLeft: "40%",
        marginBottom: 18,
      },
      userProfileImageContainer: {},
      userProfileImage: {
        height: 142,
        width: 142,
        borderRadius: 75,
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
        fontWeight: "400",color: "#9098B1",
        borderRadius: 5,
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
        color: "#9098B1",
        borderRadius: 5,
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
        color: "#9098B1",
        borderRadius: 5,
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
        color: "#9098B1",
        borderRadius: 5,
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
        color: "#9098B1",
        borderRadius: 5,
      },
      btn_Save: {
        height: 57,
        width: 343,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
      },
    });