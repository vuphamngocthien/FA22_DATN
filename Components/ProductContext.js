import React, { useState, useEffect, createContext, useContext } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { UserContext } from "./UserContext";
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const { user_id,number } = useContext(UserContext);
  const [Cart, setCart] = useState([]);
  const [Detail_cart, setDetail_cart] = useState([]);
  const [CartID, setCartID] = useState("");
  const [dt_id,setdt_id]=useState('');
  const [product, setProduct] = useState([]);
  const [favorite, setFavorite] = useState([]);
  var item = [];
  useEffect(() => {
    onValue(ref(getDatabase(), "Cart/"), (snapshot) => {
     
      setCart(Object.values(snapshot.val()));

      //     console.log(Cart[0].Cart_id);
    });
    onValue(ref(getDatabase(), "Detail_cart/"), (snapshot) => {
      setDetail_cart(Object.values(snapshot.val()));
    });
    onValue(ref(getDatabase(), "Products/"), (snapshot) => {
      setProduct(Object.values(snapshot.val()));
    });
    onValue(ref(getDatabase(), "Favorite/"), (snapshot) => {
      setFavorite(Object.values(snapshot.val()));
    });
  }, []);
  const getCart = async () => {
    var item = [];
    console.log(user_id);
    try {
      for (var i = 1; i <= Cart.length; i++) {
        if (user_id == Cart[i - 1].User_id) {
          setCartID(Cart[i - 1].Cart_id);
          break;
        }
      }
      for (var i = 1; i <= Detail_cart.length; i++) {
        if (CartID == Detail_cart[i - 1].cart_id) {
          item.push({
            Product_id: Detail_cart[i - 1].Product_id,
            Innitiated_date: Detail_cart[i - 1].Innitiated_date,
            cart_id: Detail_cart[i - 1].cart_id,
            Price: Detail_cart[i - 1].Price,
            Quantity: Detail_cart[i - 1].Quantity,
            Status: Detail_cart[i - 1].Status,
            dt_id: Detail_cart[i - 1].dt_id,
          });
          //console.log(Detail_cart[i].cart_id + "##############");
          //console.log(data2 + "??????????????");
          //    console.log(item);
        }
      }
      // setData(Object.values(Detail_cart[0].Product_id));

      return item;
    } catch (error) {
      console.log("onGeetProductForHomePage error", error);
    }
  };

  const showDetailCart=async()=>{
    const res= await getCart();
    var item=[];
    var newitem=[]
    for(var i=1;i<=res.length;i++){
      console.log(res[i-1].Status);
      if(res[i-1].Status == 'false'){
        item=[res[i-1]];
        break;
      }
    }

  var item2=[];
  item2=Object.values(item[0].Product_id);
  for(var i=1;i<=item2.length;i++){
    for(var j=1;j<=product.length;j++){
      console.log('-----------',product[j-1].Product_id)
      console.log('---------------',item2[i-1].id_pd);
      if(product[j-1].Product_id == item2[i-1].id_pd ){
        console.log('-----------',product[j-1].Product_id)
        newitem.push(product[j-1])
        }else{
          console.log('that bai roiiiiiiiiiiii')
        }
      }
    }
    return newitem;
 }

  const getDetailCart=async(quantity,id_pd,price)=>{
    const res= await getCart();
    var item=[];
    for(var i=1;i<=res.length;i++){
      console.log(res[i-1].Status);
      if(res[i-1].Status == 'false'){
        item=[res[i-1]];
        break;
      }
    }
    var dt_id=item[0].dt_id+'/Product_id/'+id_pd;
    setdt_id(item[0].dt_id);
    set(ref(getDatabase(),'Detail_cart/'+dt_id),{
      Quantity:quantity,
      id_pd:id_pd,
      price:price
    })
    return item;
  }

  
  const getProductDetailCart = async (products) => {
    var item = [];
    for (var i = 1; i <= products.length; i++) {
      for (var j = 1; j <= product.length; j++) {
        if (products[i - 1].id_pd == product[j - 1].Product_id) {
          item.push(product[j - 1]);
        }
      }
    }
    //  console.log(products + "$$$$$$$");
    return item;
    //get detail cart id , then get product id
  };

  const getProductBycate = async (cate_id) => {
    var item = [];
    for (var i = 1; i <= product.length; i++) {
      if (cate_id == product[i - 1].Category_id) {
        item.push(product[i - 1]);
      }
    }

    return item;
  };
  
  const getProductname = async (name) => {
    var item = [];
    for (var i = 1; i <= product.length; i++) {
      if (name == product[i - 1].Product_name) {
        item.push(product[i - 1]);
      }
    }

    return item;
  };
    

const addFavorite = (product_id) => {
    var string = "fv" + number + "/Product_id/" + product_id;
    console.log('--------------',string);
    set(ref(getDatabase(), "Favorite/" + string), {
      pd: product_id,
    });
  };
const showFavorite = async () => {
    var item = [];
    var item2 = [];
    var newitem = [];
    console.log(favorite[0] + "asdasdddad");
    for (var i = 1; i <= favorite.length; i++) {
      if (favorite[i - 1].User_id == user_id) {
        item = [favorite[i - 1]];

        break;
      }
    }
    item2 = Object.values(await item[0].Product_id);
    for (var i = 1; i <= item2.length; i++) {
      for (var j = 1; j <= product.length; j++) {
        // console.log("-----------", product[j - 1].Product_id);
        // console.log("---------------", item2[i - 1].id_pd);
        if (product[j - 1].Product_id == item2[i - 1].pd) {
          // console.log("-----------", product[j - 1].Product_id);
          newitem.push(product[j - 1]);
        } else {
        }
      }
    }
    console.log(newitem + "saddsada");
    return newitem;
  };

  return (
    <ProductContext.Provider
      value={{
        getCart,
        user_id,
        getProductBycate,
        getProductDetailCart,getDetailCart,showDetailCart,dt_id,addFavorite,showFavorite,Detail_cart,getProductname
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};