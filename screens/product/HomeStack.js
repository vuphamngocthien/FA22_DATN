import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    Dimensions,
    Pressable
} from "react-native";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import React, {
    useState,
    useEffect,
    useContext,
    ScrollView,
    Animated,
    createContext,
} from "react";
import { UserContext } from "../../Components/UserContext";
import { ProductContext } from "../../Components/ProductContext";
export const HomeStack = ({navigation,routes}) => {
    const numColumns = 2;
    const numColumns2 = 10;
    const [data2, setData2] = useState([]);
  
    const [Category, setCategory] = useState([]);
    const { getProductBycate } = useContext(ProductContext);
    
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        onValue(ref(getDatabase(), "Products/"), (snapshot) => {
            setData(Object.values(snapshot.val()));
            setData2(Object.values(snapshot.val()));
        });
        onValue(ref(getDatabase(), "Category/"), (snapshot) => {
      setCategory(Object.values(snapshot.val()));
    });
        
    }, []);
    const getProductByCategory = async (cate_id) => {
        setData2([]);
        if (cate_id == 0) {
          setData2(data);
        } else {
          const res = await getProductBycate(cate_id);
          setData2(res);
        }
        onRefresh();
      };

    const renderItem = ({ item }) => {
        const { Product_name, price,Product_id,data } = item;
        console.log("-------------",item); 
        return (
            <View style={styles.itemcontainer}>
                <View style={styles.imageItem}>
                    <Pressable onPress={()=>navigation.navigate('Detailsproduct',{id:Product_id,data:item})}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 127, height: 125 }}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/fa22datn.appspot.com/o/laptop2.jfif?alt=media&token=2be9e403-737a-45b6-b0da-447c0425db92",
                        }}
                    />
                    </Pressable> 
                </View>
                <View style={{ flexDirection: 'column', left:-8,top:-25 }}>
                <Text style={{fontWeight:"700",fontSize:16,color:'#010035'}}>${price} </Text>
                    <Text style={{width:100,fontWeight:"400",fontSize:13,color:'#010035'}}>{Product_name} </Text>
                </View>

            </View>
        );
    };
    const renderItem2 = ({ item }) => {
        if (item == null) {
          return <Text>Nothing</Text>;
        } else {
          const { Category_image, Category_name, Category_id } = item;
          return (
            <Pressable onPress={() => getProductByCategory(Category_id)}>
              <View style={styles.Category}>
                <View style={styles.CategoryImage}>
                  <Image
                    style={styles.Imagecon}
                    resizeMode="cover"
                    source={{ uri: Category_image }}
                  />
                </View>
                <Text>{Category_name}</Text>
              </View>
            </Pressable>
          );
        }
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
            <FlatList
          data={Category}
          renderItem={renderItem2}
          keyExtractor={(item) => Math.random()}
          refreshing={refreshing}
          showsVerticalScrollIndicator={true}
          numColumns={numColumns2}
        />
            </View>

            <View style={styles.banner}>
                <Image
                    resizeMode="contain"
                    source={require("../../assets/images/banner1.png")}
                ></Image>
            </View>
            <View>
                <FlatList
                    data={data2}
                    renderItem={renderItem}
                    keyExtractor={(item) => Math.random()}
                    refreshing={refreshing}
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
    Category: {
        alignItems: "center",
        flexDirection: "column",
        marginLeft: 30,
        justifyContent: "center",
        width: 50,
        height: 100,
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
    rowTitle: {
        width: "100%",
        heigh: 40,
        flexDirection: "row",
    },
    itemcontainer: {
        flexDirection: "column",
        backgroundColor: 'white',
        borderColor:'white',
        flexGrow: 1,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 8,
        margin: 10,
        marginTop: 20,
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
        width: 150,
        height: 160,
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
        backgroundColor: "#f6f6f4",
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
