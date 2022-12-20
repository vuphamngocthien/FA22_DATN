
import React, { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, Pressable,Animated } from "react-native";
import { ProductContext } from "../../Components/ProductContext";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { UserContext } from "../../Components/UserContext";


export const Cart = () => {
    var fadeAnim=useRef(new Animated.Value(1)).current;
    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { showDetailCart, dt_id } = useContext(ProductContext)
    const {number} = useContext(UserContext)
    const [data2, setData2] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isSelected, setSelection] = useState(false);
    
    
    const show = async () => {
        setData(await showDetailCart());
        onRefresh();
    }
    useEffect(() => {
        show();
        console.log(number);
    }, []);
    const onRefresh = () => {
        setRefreshing(true);

        setRefreshing(false);
    };
    const addItem = (a, b, c) => {
        var item = [];
        item.push({
            Quantity: a,
            price: b,
            id_pd: c
        }
        )
        data2.push({
            Quantity: a,
            price: b,
            id_pd: c
        });
    }
    
    const addCart = async () => {
        var b = dt_id ;
        await set(ref(getDatabase(), 'Detail_cart/'+b), {
            Status: 'Delivered',
            Innitiated_date: '20/02/2002',
            Price: 200,
            Quantity: 2,
            cart_id: 'c'+number,
            dt_id: dt_id
        })
        for (var i = 1; i <= data2.length; i++) {
            var a = dt_id+'/Product_id/' + data2[i - 1].id_pd;
            set(ref(getDatabase(), 'Detail_cart/' + a), {
                Quantity: data2[i - 1].Quantity,
                id_pd: data2[i - 1].id_pd,
                price: data2[i - 1].price
            })
    }
    setData([]);
    onRefresh();
}

const itemrender=({item,index})=>{
    var fave=true
    const handle=(a)=>{
        if(fave==true){
        Animated.timing(fadeAnim,{
            toValue:0.5,
            useNativeDriver:true
        }).start();
        fave=false
    }else{
        Animated.timing(fadeAnim,{
            toValue:1,
            useNativeDriver:true
        }).start();
        fave=true;

    }
    }
    return(
             <Animated.View style={{opacity:fadeAnim}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 200, width: '100%' }}>
                        <View>
                            <Pressable onPress={() => addItem(item.Quantity, item.price, item.Product_id)}>
                                <Image source={{ uri: item.Product_picture }} style={{ width: 120, height: 140 }} />
                            </Pressable>
                        </View>
                        <View style={{ left: 30 }}>
                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>{item.Product_name}</Text>
                                <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>${item.price}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{handle(fave)}}>
                            <View style={{width:20,height:20,alignSelf:'flex-end',borderColor:'black',borderWidth:1,borderRadius:5,left:50,top:-35}}></View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: -30, padding: 10, width: 100 }}>
                                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'red', right: -80, top: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: 10, height: 3, backgroundColor: 'white' }} />
                                </TouchableOpacity>
                                <Text style={{ right: -90, fontSize: 20, fontWeight: "600", bottom: -50 }}>{quantity}</Text>
                                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'green', right: -100, top: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/plus.png')} style={{ width: 12, height: 12 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </Animated.View>
    )
}
    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700', alignSelf: 'flex-start', color: 'orange' }}>Cart</Text>
            <FlatList
                data={data}
                renderItem={itemrender
                }
            />
            <View>
                <TouchableOpacity style={styles.btnAddtoCart} onPress={addCart}>
                    <Text style={styles.btnATC_text}>Buy</Text>
                    <Text style={styles.btnATC_text}>${ }</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Cart;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 30
    },
    btnAddtoCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 54,
        backgroundColor: '#FF6E4E',
        borderRadius: 10,
        marginHorizontal: 20,
        bottom: 5
    },
    btnATC_text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        margin: 10
    }
})