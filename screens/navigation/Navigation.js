import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthenNavigation from './AuthenNavigation';
import ProductNavigation from './ProductNavigation';
import { UserContext } from '../../Components/UserContext';
export default function Navigation  (props)  {
    // const isLoggedIn =true;
    const {isLoggedIn} = useContext(UserContext);
    return (
        <NavigationContainer>
            {
                isLoggedIn == true ? 
                <ProductNavigation /> : 
                <AuthenNavigation />
            }
        </NavigationContainer>


    )
}