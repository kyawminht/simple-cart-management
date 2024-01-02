import React, { useContext } from "react";
import { IoIosAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContextProvider";

const CartItem = ({ item }) => {
  const {removeFromCart,increaseAmount,decreaseAmount}=useContext(CartContext);

  return (
    <div className=" flex gap-x-4 border-b py-2 border-gray-200 w-full font-light">
      <div className=" w-full min-h-[150px] flex items-center gap-x-4">
        <div>
          <Link to={`product/${item.id}`}>
            <img src={item.image} className=" max-w-[80px]" alt="" />
          </Link>
        </div>

      <div className=" w-full flex flex-col">
      <div className=" flex justify-between mb-2">
          <Link to={`product/${item.id}`} className=" text-sm font-medium uppercase hover:underline max-w-[240px]">{item.title}</Link>
          <div onClick={()=>removeFromCart (item.id)} className=" cursor-pointer">
            <IoMdClose className=" text-gray-500 hover:text-red-500 transition text-2xl"/>
          </div>
      </div>
        {/* quantity and price */}
        <div className=" flex gap-x-1 text-sm">
          <div className=" flex flex-1 max-w-[100px] border h-full items-center font-medium">
           <div className="minus flex-1 cursor-pointer" onClick={()=>decreaseAmount(item.id)}> <IoMdRemove/></div>
            <div className=" h-full flex justify-center items-center px-2">{item.amount}</div>
            <div className="plus flex-1 flex cursor-pointer justify-center items-center h-full" onClick={()=>increaseAmount(item.id)}>  <IoIosAdd/></div>
          </div>

          <div className=" flex-1 flex justify-around items-center ">$ {item.price}</div>

          <div className=" flex-1 flex justify-end items-center font-medium"> {`$ ${parseFloat(item.price * item.amount).toFixed(2)}`}</div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default CartItem;
