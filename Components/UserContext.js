import React, { useState, useEffect, createContext } from 'react';
import { getDatabase, ref, set, push, onValue } from "firebase/database";


export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const { children } = props;
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [data, setData] = useState([]);
    useEffect(()=>{
        onValue(ref(getDatabase(), "User"), (snapshot) => {
            setData(Object.values(snapshot.val()));
            });
    },[]);

    const login = async (email,password) => {
        
        for (var i = 0; i <= data.length; i++) {
            if (email == data[i].Email && password == data[i].Password) {
               
                setisLoggedIn(true);
                break;
            } else{
              console.log('that bai');
            }
            
        }
    
}

 
    return (
        <UserContext.Provider
            value={{
                isLoggedIn,  login
            }}
        >
            {children}
        </UserContext.Provider>
    )

}