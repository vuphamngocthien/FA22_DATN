import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import React, {
  useState,
  useEffect,
  useContext,
  ScrollView,
  Animated,
} from "react";
const HomeStack = (props) => {
  const { navigation } = props;
  const numColumns = 2;
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(ref(getDatabase(), "Products/"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
    console.log(data.length + ">>>");
  }, []);
  const renderItem = ({ item }) => {
    const { name, price } = item;
    return (
      <View style={styles.itemcontainer}>
        <View style={styles.imageItem}>
          <Image
            resizeMode="cover"
            style={{ width: 127, height: 125 }}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/fa22datn.appspot.com/o/laptop2.jfif?alt=media&token=2be9e403-737a-45b6-b0da-447c0425db92",
            }}
          />
        </View>
        <Text>{name} </Text>
        <Text>{price} </Text>
      </View>
    );
  };

  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Text style={styles.textTitle}>Select Category</Text>
        <View style={styles.IconContainer}>
          <Image
            style={styles.Icon}
            resizeMode="cover"
            source={require("../../assets/images/shopping_bag.png")}
          />
          <Image
            style={styles.Icon}
            resizeMode="cover"
            source={require("../../assets/images/bellVector.png")}
          />
        </View>
      </View>

      <View style={styles.IconCategory}>
        <View style={styles.Category}>
          <View style={styles.CategoryImage}>
            <Image
              style={styles.Imagecon}
              resizeMode="cover"
              source={require("../../assets/images/dienthoai.png.png")}
            />
          </View>
          <Text>Phone</Text>
        </View>
        <View style={styles.Category}>
          <View style={styles.CategoryImage}>
            <Image
              style={styles.Imagecon}
              resizeMode="cover"
              source={require("../../assets/images/laptop.png")}
            />
          </View>
          <Text>Laptop</Text>
        </View>
        <View style={styles.Category}>
          <View style={styles.CategoryImage}>
            <Image
              style={styles.Imagecon}
              resizeMode="cover"
              source={require("../../assets/images/airpod.png")}
            />
          </View>
          <Text>Airpod</Text>
        </View>
        <View style={styles.Category}>
          <View style={styles.CategoryImage}>
            <Image
              style={styles.Imagecon}
              resizeMode="cover"
              source={require("../../assets/images/apple_watch.png")}
            />
          </View>
          <Text>Apple watch</Text>
        </View>
      </View>

      <View style={styles.searchrow}>
        <TextInput style={styles.textInput} placeholder="Tìm kiếm" />
        <View style={styles.iconContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../../assets/images/search.png")}
          />
        </View>
      </View>

      <View style={styles.banner}>
        <Image
          resizeMode="contain"
          source={require("../../assets/images/banner1.png")}
        ></Image>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => Math.random()}
          refreshing={refreshing}
          onScroll={this.handleScroll}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
        />
      </View>
    </View>
  );
};

export default HomeStack;
const styles = StyleSheet.create({
  rowTitle: {
    width: "100%",
    heigh: 40,
    flexDirection: "row",
  },
  itemcontainer: {
    flexDirection: "column",
    marginVertical: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "red",

    alignItems: "center",
  },

  banner: {
    width: "90%",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    left: 15,
  },
  imageItem: {
    width: 100,
    height: 180,
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: 40,
    borderColor: "cyan",
    borderRadius: 30,
    borderWidth: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    left: 20,
  },
  iconContainer: {
    position: "absolute",
    right: 48,
    top: 8,
  },
  searchrow: {
    flexDirection: "row",

    width: "100%",
    height: 50,
    paddingHorizontal: 40,

    position: "relative",
  },
  Category: {
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 30,
    justifyContent: "center",
    width: 50,
    height: 70,
  },
  CategoryImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Imagecon: {
    width: 20,
    height: 30,
  },
  IconCategory: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    height: 100,
  },
  textTitle: {
    fontSize: 20,
    color: "red",
  },
  Icon: {
    width: 32,
    height: 30,
    marginLeft: 20,
  },
  IconContainer: {
    width: 80,
    height: 33,
    alignItems: "flex-end",
    marginLeft: 100,
    flexDirection: "row",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 24,
    marginTop: 50,
  },
});
// var data = [
//   {
//     product: {
//       _id: "61d12f0c555401c8610fb8d1",
//       name: "Ambrosia ambrosioides (Cav.) Payne",
//       price: 1,
//     },
//   },
// ];
