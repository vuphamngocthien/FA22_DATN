import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { ProductContext } from "../../Components/ProductContext";

const Favorite = () => {
    const [data, setData] = useState([])
    const {getDetailCart}=useContext(ProductContext)
    const { showFavorite } = useContext(ProductContext)
    const loadData = async () => {
        const res = await showFavorite();
        setData(res);
    };
    useEffect(() => {
        loadData();
    }, []);
    
    const addtoCart= async(quantity,id_pd,price)=>{
        await getDetailCart(quantity,id_pd,price);
        ToastAndroid.show("Add to Cart Success!", ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Favorite</Text>
            </View>
            <FlatList
                data={data}
                vertical
                renderItem={({ item, index }) => (
                    <View style={styles.favorite_shadow}>
                        <Image source={{ uri: item.Product_picture }} style={{ width: 170, height: 170, borderRadius: 10, }} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column', width: 100,top:-60 }}>
                                <Text style={{ fontWeight: '700', fontSize: 20, color: 'black', alignSelf: 'center' }}>{item.Product_name}</Text>
                                <Text style={{ fontWeight: '700', fontSize: 20, color: 'black', top: 20, left: 20 }}>${item.price}</Text>
                            </View>
                            <View style={{ flexDirection: 'column',top:-80,left:-17}}>
                                <View>
                                    <Image source={require('../../assets/delete.png')} style={{ width: 25, height: 25,left:70,top:25 }} />
                                    <TouchableOpacity style={styles.btnAddtoCart} onPress={()=>addtoCart(1,item.Product_id,item.price)}>
                                        <Text style={styles.btnATC_text}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />

        </View>

    )
}

export default Favorite;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingVertical: 30,
        left: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    favorite_shadow: {
        flexDirection: 'row',
        widthL:'100%',
        padding:10
    },
    btnAddtoCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        backgroundColor: '#FF6E4E',
        borderRadius: 10,
        top:45
    },
    btnATC_text: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
    }
})