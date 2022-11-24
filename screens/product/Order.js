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
const Order = (props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const FirstRoute = () => <View style={{ backgroundColor: "#ff4081" }} />;

  const SecondRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
  const ThirdRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  const [routes] = React.useState([
    { key: "first", title: "Delivered" },
    { key: "second", title: "Processing" },
    { key: "third", title: "Canceled" },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(ref(getDatabase(), "Products/"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
    console.log(data.length + ">>>");
  }, []);
  const renderItem = ({ item }) => {
    const { Product_name, price } = item;
    return (
      <View style={styles.itemcontainer}>
        <View style={styles.row1}>
          <Text style={styles.textItem}> id </Text>
          <Text style={styles.textItem2}> 23/10/2002 </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textItem}>{Product_name} </Text>
          <Text style={styles.textItem2}>Total amount: {price} </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_signin}>
            <Button title="Detail" color="#FF6E4E" />
          </View>
          <Text style={styles.textStatus}> Delivered </Text>
        </View>
      </View>
    );
  };
  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
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
    marginLeft: "40%",
  },
  row1: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  row: {
    flexDirection: "row",
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
