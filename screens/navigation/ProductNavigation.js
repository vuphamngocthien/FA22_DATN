import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


import HomeStack from '../product/HomeStack'; 
import MarkerStack from '../product/MarkerStack';
import ProfileStack from '../product/ProfileStack';
import BellStack from '../product/BellStack';




const ProductNavigation = () => {
    return (
        // <ScrollView>
        <Tab.Navigator  
        screenOptions={({route}) =>({
            tabBarIcon:() =>{
                    if (route.name == 'HomeStack') {
                        return <Image style={styles.icon} source={require('../../assets/images/homeVector.png')} />
                    } else if (route.name == 'MarkerStack') {
                        return <Image style={styles.icon} source={require('../../assets/images/markerVector.png')} />
                    }  else if (route.name == 'BellStack') {
                        return <Image style={styles.icon} source={require('../../assets/images/bellVector.png')} />
                    }else if (route.name == 'ProfileStack') {
                        return <Image style={styles.icon} source={require('../../assets/images/userVector.png')} />
                    }
                },
            tabBarLabel:({focused}) =>{
                if(route.name =='HomeStack' && focused){
                    return <Image style={styles.dot} source={require('../../assets/images/dot.png')}/>
                } else if(route.name =='MarkerStack' && focused){
                    return <Image  style={styles.dot}  source={require('../../assets/images/dot.png')}/>
                } else if(route.name =='BellStack' && focused){
                    return <Image  style={styles.dot} source={require('../../assets/images/dot.png')}/>
                } else if(route.name =='ProfileStack' && focused){
                    return <Image  style={styles.dot} source={require('../../assets/images/dot.png')}/>
                }
                return null;
            }
        })}
    >

            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="MarkerStack" component={MarkerStack} />
            <Tab.Screen name="BellStack" component={BellStack} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
        /* </ScrollView> */
    )
    
}

export default ProductNavigation

const styles = StyleSheet.create({
    icon:{
        width:24,
        height:24
    },
    dot:{
        width:4,
        height:4
    }
})
