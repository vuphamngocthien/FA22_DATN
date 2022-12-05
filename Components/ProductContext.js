import React, { useState, useEffect, createContext, useContext } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { UserContext } from "./UserContext";
export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const { user_id } = useContext(UserContext);
  const [Cart, setCart] = useState([]);
  const [Detail_cart, setDetail_cart] = useState([]);
  const [CartID, setCartID] = useState("");

  const [product, setProduct] = useState([]);
  var item = [];
  useEffect(() => {
    onValue(ref(getDatabase(), "Cart/"), (snapshot) => {
      console.log(snapshot["Product_id"]);
      setCart(Object.values(snapshot.val()));

      //     console.log(Cart[0].Cart_id);
    });
    onValue(ref(getDatabase(), "Detail_cart/"), (snapshot) => {
      setDetail_cart(Object.values(snapshot.val()));
    });
    onValue(ref(getDatabase(), "Products/"), (snapshot) => {
      setProduct(Object.values(snapshot.val()));
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

  return (
    <ProductContext.Provider
      value={{
        getCart,
        user_id,
        getProductBycate,
        getProductDetailCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};