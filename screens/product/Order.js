import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    FlatList,
    Dimensions,
    useWindowDimensions,
    Pressable,
    Modal,
  } from "react-native";

  import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
  import React, {
    useState,
    useEffect,
    useContext,
    ScrollView,
    Animated,
  } from "react";
  import { TabView, SceneMap } from "react-native-tab-view";
  import { UserContext } from "../../Components/UserContext";
  import { ProductContext } from "../../Components/ProductContext";
  const Order = (props) => {
    const layout = useWindowDimensions();
    //const { user_id } = useContext(UserContext);
    const [detail_pro, setDetail_pro] = useState([]);
    const [index, setIndex] = React.useState(0);
    const { user_id, getCart, getProductDetailCart } = useContext(ProductContext);
  
    const FirstRoute = () => <View style={{ backgroundColor: "#ff4081" }} />;
  
    const SecondRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
    const ThirdRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: ThirdRoute,
    });
    const DetailModal = (props) => {
      const { ShowModal, setShowModal } = props;
  
      return (
        <Modal animationType="slide" transparent={true} visible={ShowModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text> Xac nhan thanh toan</Text>
  
              <Text onPress={() => setShowModal(false)} style={styles.cancle}>
                Huy bo
              </Text>
            </View>
          </View>
        </Modal>
      );
    };
  
    const [routes] = React.useState([
      { key: "first", title: "Delivered" },
      { key: "second", title: "Processing" },
      { key: "third", title: "Canceled" },
    ]);
  
    const [isShowModal, setisShowModal] = useState(false);
  
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const loadData = async () => {
        const res = await getCart();
        setData(res);
  
        onRefresh();
      };
      loadData();
      //  console.log(data[0].Product_id);
    }, []);
    const renderItem = ({ item }) => {
      const { Price, Status, Innitiated_date, Quantity, cart_id, Product_id } =
        item;
      return (
        <View style={styles.itemcontainer}>
          <View style={styles.row1}>
            <Text style={styles.textItem}>{cart_id} </Text>
            <Text style={styles.textItem2}> {Innitiated_date} </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textItem}>{Price} </Text>
            <Text style={styles.textItem2}>Total amount:{Quantity} </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.btn_signin}>
              <Button
                title="Detail"
                color="#FF6E4E"
                onPress={() => getDetail_pro(item.Product_id)}
              ></Button>
  </View>
  
            <Text style={styles.textStatus}> {Status}</Text>
            <DetailModal
              ShowModal={isShowModal}
              setShowModal={setisShowModal}
              detail_pro={Object.values(Product_id)}
            />
          </View>
        </View>
      );
    };
    const onRefresh = () => {
      setRefreshing(true);
  
      setRefreshing(false);
    };
    const getDetail_pro = async (props) => {
      var item = [];
      item = Object.values(props);
  
      console.log(item[0] + "^^^^^^^^^^^^");
      //const res = await getProductDetailCart(item);
      // setDetail_pro(res);
      //console.log(detail_pro);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.orderBar}>
          <View style={styles.Icon}>
            <Image
              style={styles.Icon}
              resizeMode="cover"
              source={require("../../assets/images/backIcon.png")}
            />
          </View>
          <Text style={styles.TextOrderBar}> My order </Text>
        </View>
        <View style={styles.tab_View}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: "100%" }}
          />
        </View>
  
        <View>
          <View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => Math.random()}
              refreshing={refreshing}
              showsVerticalScrollIndicator={false}
              onRefresh={onRefresh}
            />
          </View>
        </View>
      </View>
    );
  };
  export default Order;
  const styles = StyleSheet.create({
    tab_View: {
      width: "100%",
      height: 50,
    },
    orderBar: {
      width: "100%",
      height: 50,
      textAlign: "center",
      flexDirection: "row",
    },
    container: {
      width: "100%",
      padding: 20,
      marginTop: 40,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 8,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "90%",
      height: 200,
    },
    cancle: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      marginTop: 8,
    },
    textStatus: {
      fontSize: 15,
      color: "green",
      marginTop: 15,
      marginLeft: "40%",
    },
    btn_signin: {
      width: 100,
      height: 50,
      borderRadius: 5,
      marginTop: 10,
    },
    textItem: {
      fontSize: 15,
      color: "#9098B1",
    },
    textItem2: {
      fontSize: 15,
      color: "#9098B1",
      marginLeft: "50%",
    },
    row1: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderColor: "gray",
    },
    row: {
      flexDirection: "row",
      marginTop: 10,
    },
    itemcontainer: {
      flexDirection: "column",
      marginVertical: 24,
      paddingHorizontal: 24,
      flexGrow: 1,
  color: "white",
      marginTop: 10,
    },
    TextOrderBar: {
      fontSize: 18,
      alignSelf: "center",
      marginLeft: "40%",
      marginBottom: 18,
    },
  });
  