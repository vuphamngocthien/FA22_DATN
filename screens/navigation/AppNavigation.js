import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthenNavigation from './AuthenNavigation';
import ProductNavigation from './ProductNavigation';
import { UserContext } from '../../Components/UserContext';
import Login from '../authen/Login';
import Sign_up from '../authen/Sign_up'
import Detailsproduct from "../product/Detailsproduct";
import HomeStack from "../product/HomeStack";


export default function AppNavigation  (props)  {
    const LoggedIn =true;
    const {isLoggedIn} = useContext(UserContext);
    return (
        <NavigationContainer independent={true} >
            {
                isLoggedIn == true ? 
                <ProductNavigation />:
                <AuthenNavigation />
                
                  
                
            }
        </NavigationContainer>
        
       


        )
}
