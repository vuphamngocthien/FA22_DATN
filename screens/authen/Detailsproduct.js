import React, { useRef, useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, SafeAreaView, Animated, PanResponder, Dimensions,TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Details from "./category_pages/Details";
import Shops from "./category_pages/Shop";
import Contact from "./category_pages/Contact";
import Features from "./category_pages/Features";
const Tap = createMaterialTopTabNavigator();
const data = [
    {
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/hinh-anh-doremon-tha-bong-bay.jpg'
    },
    {
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/hinh-anh-doremon-tha-bong-bay.jpg'
    },
    {
        image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/hinh-anh-doremon-tha-bong-bay.jpg'
    },
]


const ListItem = ({ item }) => {
    return (
        <View style={{ margin: 10 }}>
            <Image source={{ uri: item.image }}
                style={{ width: 500, height: 200 }}
                resizeMode="cover" />
        </View>
    )
}
const colors = {
    orange: '#FFBA5A',
    grey: '#a9a9a9'
}

const Detailsproduct = () => {
    // const stars = Array(5).fill(0);
    // const [currentValue, setCurrentValue] = React.useState(0);
    // const [hoverValue, setHoverValue] = React.useState(undefined);
    // const handleClick = value => {
    //     setCurrentValue(value);
    // }
    const [defaultRating,setdefaultRating] =useState(2);
    const [maxRating,setmaxRating]=useState([1,2,3,4,5])
    const startImgFilled='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const startImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    const CustomRatingBar= () =>{
        return(
            <View style={styles.customRatingbar}>
                {
                    maxRating.map((item,key)=>{
                        return(
                            <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setdefaultRating(item)}
                            >
                                <Image
                                style={styles.starImgStyle}
                                source={
                                    item <= defaultRating ?{uri :startImgFilled}
                                    :{uri:startImgCorner}
                                }
                                />
                            </TouchableOpacity>
                            )
                    })
                }
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.appbar}>
                <View style={styles.iconback}>
                    <Image source={require('../../assets/Vectoor.png')} style={{ width: 10, height: 18, zIndex: 10, top: 10 }}></Image>
                </View>
                <Text style={{ color: '#010035', fontFamily: 'Rubik', fontWeight: "bold", fontSize: 18, fontStyle: "normal" }}>Product Detail</Text>
            </View>
                <FlatList
                    data={data}
                    horizontal
                    renderItem={({ item, index }) =>
                    (
                        <View style={{ margin: 10, boxShadow: '0px 10px 20px rgba(55, 78, 136, 0.16)', borderRadius: 18 }}>
                            <Image source={{ uri: item.image }} style={[{ width: 250, height: 300, borderRadius: 18 }]} />
                        </View>
                    )}
                />
            <View style={styles.category}>
                <View style={styles.title_product}>
                    <Text style={{ width: 231, height: 28, fontFamily: 'Rubik', fontWeight: 'bold', fontSize: 24, color: '#010035' }}>Galaxy Note 20 Ultra</Text>
                    <View style={styles.like}>
                        <Image source={require('../../assets/Like.png')} style={{ width: 15, height: 13 }} />
                    </View>
                </View>
                <View style={{ top: 35, left: -50 }}>
                    <CustomRatingBar/>
                </View>

                <View style={{ top: 40,height:400}} >
                    <NavigationContainer>
                        <Tap.Navigator style={{backgroundColor:'rgb(240, 240, 240)'}}>
                            <Tap.Screen name='Details' component={Details} />
                            <Tap.Screen name='Shops' component={Shops} />
                            <Tap.Screen name='Contact' component={Contact} />
                            <Tap.Screen name='Features' component={Features} />
                        </Tap.Navigator>
                    </NavigationContainer>

                </View>
            </View>
        </View>
    )
}




export default Detailsproduct;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 10
    },
    appbar: {
        flexDirection: 'row',
        width: 234,
        height: 37,
        justifyContent: "space-between",
        alignItems: 'center',
        left: 50,
        top: -50
    },
    iconback: {
        backgroundColor: 'rgba(1, 0, 53, 1)',
        width: 37,
        height: 37,
        borderRadius: 10,
        alignItems: 'center',
        zIndex: 0
    },
    product: {
        width: 250,
        height: 335,
        // top: 100,
        borderRadius: 10,
        boxShadow: '0px 10px 20px rgba(55, 78, 136, 0.16)',
        backgroundColor: 'white'
    },
    category: {
        // position:'absolute',
        width: '100%',
        height: 470,
        backgroundColor: 'rgb(240, 240, 240)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: '0px 5px 50px black',

    },
    title_product: {
        left: 50,
        top: 30,
        flexDirection: 'row',
    },
    like: {
        width: 37,
        height: 33,
        backgroundColor: 'black',
        borderRadius: 7,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    customRatingbar:{
        justifyContent: 'center',
        flexDirection:'row',
    },
    starImgStyle:{
        width:40,
        height:40,
        resizeMode:'cover'
    }
});