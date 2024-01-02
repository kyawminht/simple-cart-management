import React, { createContext, useEffect, useState } from 'react'

export const CartContext=createContext();
const CartContextProvider = ({children}) => {
    const [cart,setCart]=useState([]);
    const [itemAmount,setItemAmount]=useState(0);

    //total price
    const [totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
      const total=cart.reduce((ac,cv)=>{
        return ac + cv.price * cv.amount;
      },0);
      setTotalPrice(total);
    });
    //update item amount

    useEffect(()=>{
      if (cart){
        const amount=cart.reduce((ac,cu)=>{
          return ac +cu.amount;
        },0);
        setItemAmount(amount);
      }
    },[cart]);

    //increase amount
    const increaseAmount=(id)=>{
      const item=cart.find((item)=>item.id === id)
      addToCart(item,id);
    }

    //decrease amount
    const decreaseAmount=(id)=>{
      const cartItem=cart.find((item)=>item.id === id)
      if (cartItem){
        const newCart=cart.map((item)=>{
          if (item.id === id){
            return {...item,amount:cartItem.amount -1}
          }else{
            return item;
          }
        });
        setCart(newCart);
      }
      if (cartItem.amount === 1){
        removeFromCart(id);
      }
    }

    //clear cart
    const clearCart=()=>{
      setCart([]);
    }
    //remove from cart
    const removeFromCart=(id)=>{
      const newCart=cart.filter((item)=>{
        return item.id !== id;
      })
      setCart(newCart);
    };
    
    const addToCart=(product,id)=>{
      const newItem={...product,amount:1}
      //checking item is already in cart
      const cartItem=cart.find((item)=>{
        return item.id === id;
      });
       //if item is already in cart
       if (cartItem){
        const newCart=[...cart].map((item)=>{
          if (item.id === id){
            return {...item,amount:cartItem.amount + 1}
          }else {
            return item;
          }
        });
        setCart(newCart);
       }else{
        setCart([...cart,newItem]);
       }
      
    }
    
  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,increaseAmount,decreaseAmount,itemAmount,totalPrice}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
