import React, { useState,useContext } from 'react';
import { Text, StyleSheet, View, Image, Pressable, TouchableOpacity, ToastAndroid } from "react-native";
import { ProductContext } from '../../../Components/ProductContext';

function Details({route}) {
    const [selectedItem, setSelectedItem] = useState(null);
    const [clickGb, setclickGb] = useState(0);
    const handleClick = (index, id) => {
        setclickGb(id)
    }
    const selectColor = [
        { value: 'brown', colors: '#772D03' },
        { value: 'black', colors: '#010035' }
    ]
    const selectGB = [
        { value: 128, dungluong: 128 },
        { value: 256, dungluong: 256 }
    ]
    const {getDetailCart}=useContext(ProductContext)
    console.log('.................',route.params.data.Product_id);
    var quantity=1;
    var id_pd=route.params.data.Product_id;
    var price=route.params.data.price;

    const addtoCart= async()=>{
        await getDetailCart(quantity,id_pd,price);
        ToastAndroid.show("Add to Cart Success!", ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Image source={require('../../../assets/Group.png')} style={{ width: 28, height: 28 }} />
                    <View style={{ right: 15 }}><Text>Exynos 990</Text></View>
                </View>
                <View style={{ right: 10 }}>
                    <Image source={require('../../../assets/Layer.png')} style={{ width: 34, height: 28 }} />
                    <View style={{ right: 15 }}><Text>108+12 mp</Text></View>
                </View>
                <View style={{ right: 20 }}>
                    <Image source={require('../../../assets/Chip.png')} style={{ width: 35, height: 28 }} />
                    <View style={{}}><Text>8GB</Text></View>
                </View>
                <View>  
                    <Image source={require('../../../assets/01.png')} style={{ width: 25, height: 28 }} />
                    <View style={{ right: 10 }}><Text>256 GB</Text></View>
                </View>
            </View>
            <View style={styles.middle}>
                <View style={{ left: 15 }}><Text style={{ fontWeight: 'bold', fontSize: 20, color: '#010035' }}>Select color and capacity</Text></View>
                <View style={styles.capacity}>
                    {selectColor.map((item) => {
                        return (
                            <Pressable
                                key={item.value}
                                onPress={() => setSelectedItem(item.value)}>
                                {selectedItem === item.value ?
                                    <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', zIndex: 1, width: 60, height: 60, left: 10 }}>
                                        <Image source={require('../../../assets/yes.png')} style={{ width: 20, height: 16, color: 'white' }} />
                                    </View> : null}
                                <View style={{ width: 60, height: 60, backgroundColor: `${item.colors}`, borderRadius: 33, alignItems: 'center', justifyContent: 'center',marginHorizontal:10}}>
                                </View>
                            </Pressable>
                        )
                    })}
                    <View style={styles.gb}>
                        {
                            selectGB.map((item) => {
                                return (
                                    <TouchableOpacity
                                        key={item.value}
                                        onPress={() => setclickGb(item.value)}
                                        style={clickGb === item.value ? styles.buttonActive : styles.buttongb}>
                                        <Text style={clickGb === item.value ? styles.textActive : styles.gbtext}>{item.dungluong}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </View>


             <View>
                <TouchableOpacity style={styles.btnAddtoCart} onPress={addtoCart}>
                    <Text style={styles.btnATC_text}>Add to Cart</Text>
                    <Text style={styles.btnATC_text}>$1,5000.00</Text>
                </TouchableOpacity>
            </View> 
        </View>

    );
}

export default Details;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: 350,
        height: 135,
        left: 20,
        //  alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        
        //  flex:1
    },
    container: {
        flexDirection: 'column',
        height: 182,
        width: "100%",

    },
    capacity: {
        flexDirection: 'row',
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
      
    },
    gb: {
        flexDirection: 'row',
        width:200,
        left:60
    },
    textActive: {
        fontWeight: '700',
        fontSize: 19,
        color: '#FFFFFF'
    },
    buttonActive: {
        width: 72,
        height: 31,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6E4E'
    },
    middle:{
        bottom:80,
        marginVertical:10
    },
    gbtext: {
        fontWeight: '700',
        fontSize: 13,
        color: '#8D8D8D',
    },
    buttongb: {
        width: 50,
        height: 39,
        backgroundColor: 'FFFFFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnAddtoCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 54,
        backgroundColor: '#FF6E4E',
        borderRadius: 10,
        marginHorizontal: 60,
        bottom:90
    },
    btnATC_text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        margin: 10
    }
})