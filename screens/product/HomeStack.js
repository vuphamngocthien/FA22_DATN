import{
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    Dimensions,
    Pressable,
    ScrollView,
} from "react-native";
import { getDatabase, ref, onValue, onChildAdded } from "firebase/database";
import React, {
    useState,
    useEffect,
    useContext,
    Animated,
    createContext,
} from "react";
import { UserContext } from "../../Components/UserContext";
import { ProductContext, } from "../../Components/ProductContext";

export const HomeStack = ({navigation,routes}) => {
    const numColumns = 2;
    const numColumns2 = 9;
    const [data2, setData2] = useState([]);
    const [name,setName]=useState('')
    const images=[  
        require("../../assets/images/shopping_bag.png"),
        require("../../assets/images/shopping_bag.png"),
        require("../../assets/images/shopping_bag.png"),
        require("../../assets/images/shopping_bag.png"),
        require("../../assets/images/shopping_bag.png"),
    ]
  
    const [Category, setCategory] = useState([]);
    const { getProductBycate,getCart,showDetailCart,getProductname,addFavorite } = useContext(ProductContext);
    const [search,setSearch]=useState('');
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
    getCart();
    showDetailCart();
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
      const getProductByName = async () => {
        setData2([]);
        if (name == null) {
          setData2(data);
        } else {
          const res = await getProductname(name);
          setData2(res);
        }
        onRefresh();
      };
      const addFavo = async (pd) => {
        addFavorite(pd);
        console.log("them thanh cong");
      };
const bannerdata=[
    {image:require("../../assets/images/banner1.png")},
    {image:require("../../assets/images/banner1.png")},
    {image:require("../../assets/images/banner1.png")},
]
    const renderItem = ({ item }) => {
        const { Product_name, price,Product_id,data,Sale,Product_picture } = item;
        return (
            <View style={styles.itemcontainer}>
                <View style={styles.imageItem}>
                    <Pressable onPress={()=>navigation.navigate('Detailsproduct',{id:Product_id,data:item})}>
                    <Image
                        resizeMode="cover"
                        style={{ width: 127, height: 125 }}
                        source={{
                            uri:item.Product_picture
                        }}
                    />
                    {
                    item.Sale ==0 ? null: <View><Image source={require('../../assets/sale.png')} style={{width:50,height:50,top:-126,left:-22,transform:[{rotateZ:'-57deg'}]}}></Image><Text style={styles.sale}>{item.Sale}%</Text></View>
                    }
                    </Pressable> 
                </View>
                <View style={{ flexDirection: "row", left: -8 }}>
          <View style={{ flexDirection: "column", left: 8, top: -25 }}>
            <Text style={{ fontWeight: "700", fontSize: 16, color: "#010035" }}>
              ${price}{" "}
            </Text>
            <Text
              style={{
                width: 100,
                fontWeight: "400",
                fontSize: 13,
                color: "#010035",
              }}
            >
              {Product_name}{" "}
            </Text>
          </View>
          <View style={{ flexDirection: "column", left: -8, top: -25 }}>
            <Pressable onPress={() => addFavo(Product_id)}>
              <Image
                resizeMode="cover"
                style={{ width: 20, height: 20 }}
                source={require("../../assets/lover.png")}
              />
            </Pressable>
          </View>
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
        <ScrollView vertical={true}>

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
            <View style={{flexDirection:'row'}}>
            <TextInput style={{width:300,height:30,backgroundColor:'white',top:10,borderRadius:20,shadowColor: "#000",shadowOffset: {width: 0,height: 6,},shadowOpacity: 0.39,shadowRadius: 8.30,elevation: 13,paddingLeft:10}} value={name} onChangeText={setName} />
            <Pressable onPress={getProductByName}>
            <Image source={require('../../assets/images/search.png')} style={{width:25,height:25,top:13,left:15}}/>
            </Pressable>
            </View>
            <View style={styles.IconCategory}>
            <FlatList 
          data={Category}
          horizontal
          renderItem={renderItem2}
          keyExtractor={(item) => Math.random()}
          refreshing={refreshing}
          showsVerticalScrollIndicator={true}
        />
            </View>

            <View style={styles.banner}>
                <FlatList
                 data={bannerdata}
                 horizontal
                 showsHorizontalScrollIndicator
                 pagingEnabled
                 bounces={false}
                 renderItem={({item,index})=>(
                     <Image
                         resizeMode="contain"
                         source={item.image}
                     ></Image>
                 )}
                 />
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
        </ScrollView>
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
        width: 370,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        left: -12,
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
    sale:{
    position:'absolute',
    left:-11,
    fontSize:18,
    top:-120
    }
});

