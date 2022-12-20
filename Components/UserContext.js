import React, { useState, useEffect, createContext } from 'react';
import { getDatabase, ref, set, push, onValue } from "firebase/database";


export const UserContext = createContext();

export const UserContextProvider = ({props,children}) => {
    const [user_image, setUser_image] = useState("");
  const [user_money, setUser_money] = useState("");
  const[user_password,setuser_password]=useState('');
  const [address, setAddress] = useState("");
  const [Birth, setBirth] = useState("");
  const [dtid,setdtid]=useState('');
  const [email, setEmail] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");

  var tring = "us1";

  

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);
    const [rate,setrate]=useState('256');
    const [user_name,setUser_name]=useState('');
    const [user_id,setUser_id]=useState(0);
    const [user_idud,setUser_idud]=useState(0);
    const [cart_ud,setCart_ud]=useState(0);
    var a =0;
    useEffect(()=>{
        onValue(ref(getDatabase(), "User"), (snapshot) => {
            setData(Object.values(snapshot.val()));
          });
          console.log('>>>>>>>>>>>>',data)
          a=data.length+1;
          setUser_idud('us'+a);
          setCart_ud('c'+a);
        },[]);
    const login = async (email,password) => {
        for (var i = 1; i <= data.length; i++) {
            if (email == data[i-1].Email && password == data[i-1].Password) {
                setisLoggedIn(true);
                setUser_name(data[i-1].User_name);
                setUser_image(data[i-1].User_picture);
                setUser_money(data[i-1].Money);
                setAddress(data[i-1].Address);
                setBirth(data[i-1].Birth);
                setEmail(data[i-1].Email);
                setPhone_number(data[i-1].Phone_number);
                setPassword(data[i-1].password);
                setUser_id(data[i-1].User_id);
                setNumber(i);
                setuser_password(data[i-1].Password)
                return true;
            } else{
              console.log('that bai');
            }   
        }
}
const getUser = (id) => {
    var item = [];
    for (var i = 1; i <= data.length; i++) {
      if (id == data[i - 1].User_id) {
        item.push({
          Address: data[i - 1].Address,
          Birth: data[i - 1].Birth,
          Email: data[i - 1].Email,
          Phone_number: data[i - 1].Phone_number,
          User_name: data[i - 1].User_name,
          User_picture: data[i - 1].User_picture,
        });

        break;
      }
    }
    console.log(item + "**********");
    return item;
  };
  const UpdateUser = (name, birth, email, address, phone,avatar) => {
    set(ref(getDatabase(), "User/" + user_id), {
      Address: address,
      Birth: birth,
      Email: email,
      Money: user_money,
      Password: user_password,
      Phone_number: phone,
      User_id: user_id,
      User_name: name,
      User_picture:avatar,    
    });
    setUser_name(name);
    setBirth(birth);
    setEmail(email);
    setAddress(address);
    setPhone_number(phone);
    setUser_image(avatar);
    return true;
  };
  
    return (
        <UserContext.Provider
            value={{
                isLoggedIn,login,rate,setrate,user_name,data,user_idud,user_image,
                user_money, getUser,address,Birth, email, Phone_number,UpdateUser,user_id,cart_ud,setisLoggedIn,number
            }}
        >
            {children}
        </UserContext.Provider>
    )

}