
import React,{useContext,useEffect, useState} from "react";
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, Pressable } from "react-native";
import { ProductContext } from "../../Components/ProductContext";
import { getDatabase, ref, set, push, onValue } from "firebase/database";



export const Cart = () => {
    const [data,setData]=useState([]);
    const [quantity,setQuantity]=useState(1);
    const {showDetailCart,dt_id}=useContext(ProductContext)
    const [data2,setData2]=useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isSelected,setSelection]=useState(false);
    const show= async()=>{
        setData(await showDetailCart());
        onRefresh();
    }
    useEffect(()=>{
       show();
       
    },[]);
    const onRefresh = () => {
        setRefreshing(true);

        setRefreshing(false);
    };
 const   addItem=(a,b,c)=>{
        var item=[];
        item.push({
            Quantity:a,
            price:b,
            id_pd:c
        }
        )
        data2.push({
            Quantity:a,
            price:b,
            id_pd:c
        });

    }
 const   addCart=()=>{
     console.log('00000000000000',a);
     for(var i=1;i<=data2.length;i++){
        var a=dt_id+'/Product_id/'+data2[i-1].id_pd;
        set(ref(getDatabase(),'Detail_cart/'+a),{
            Quantity:data2[i-1].Quantity,
            id_pd:data2[i-1].id_pd,
            price:data2[i-1].price
        })
    }
    var b=dt_id+'/Status';
    set(ref(getDatabase(),'Detail_cart/'+b),{
        Status:'Delivered'
    })
}
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 200, width: '100%' }}>
                        <View>
                        <Pressable onPress={()=>addItem(item.Quantity,item.price,item.Product_id)}>
                            <Image source={{ uri: item.Product_picture }} style={{ width: 120, height: 140 }} />
                            
                            </Pressable>
                        </View>
                        <View style={{ left: 30 }}>
                            <View>
                            <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>{item.Product_name}</Text>
                            <Text style={{ fontWeight: '500', fontSize: 15, color: 'black' }}>${item.price}</Text>                                
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', left: -30, padding: 10,width:100 }}>
                                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'red', right: -80, top: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={{ width: 10, height: 3, backgroundColor: 'white' }} />
                                </TouchableOpacity>
                                    <Text style={{right:-90,fontSize:20,fontWeight:"600",bottom:-60}}>{quantity}</Text>
                                <TouchableOpacity style={{ width: 30, height: 30, backgroundColor: 'green', right: -100, top: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/plus.png')} style={{width:12,height:12 }}/>
                                </TouchableOpacity>
                            </View>
                                    
                        </View>
                    </View>
                    
                )}
            />
            <View>
                <TouchableOpacity style={styles.btnAddtoCart} onPress={addCart}>
                    <Text style={styles.btnATC_text}>Buy</Text>
                    <Text style={styles.btnATC_text}>${}</Text>
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
        padding: 20
    },
    btnAddtoCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 54,
        backgroundColor: '#FF6E4E',
        borderRadius: 10,
        marginHorizontal: 40,
        bottom:5
    },
    btnATC_text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF',
        margin: 10
    }
})