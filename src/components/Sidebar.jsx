import React, { useContext } from 'react'
import { sidebarContext } from './SidebarProvider'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CartContext } from './CartContextProvider';
import CartItem from './CartItem';
import FiTrash2, { FiTrash } from 'react-icons/fi'
const Sidebar = () => {
 const {isOpen,handleIsOpen}=useContext(sidebarContext);
 const {cart,clearCart,totalPrice}=useContext(CartContext);
  return (
    <div className={` ${isOpen ? ' right-0' : " -right-full"} w-full bg-white shadow-2xl fixed top-0 h-full md:w-[40vw] lg:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>

      <div className="flex justify-between border-b py-6">
      <div className=" uppercase font-semibold text-sm">Shopping Bag</div>
      <div onClick={handleIsOpen} className=" cursor-pointer w-8 h-8 flex justify-center items-center">
        <FaLongArrowAltRight className=" text-3xl"/>
      </div>
      </div>

      <div className=' flex flex-col gap-y-2 h-[500px] overflow-y-auto overflow-x-hidden border-b'>
        {
          cart.map((item)=>(
           <CartItem key={item.id} item={item}/>
          ))
        }
      </div>
     <div className="flex justify-between items-center w-full py-4 mt-4">
     <div className=' font-bold'>Total<span className=' ml-4'>$ {totalPrice}</span></div>
     <div onClick={clearCart} className=' bg-red-300 cursor-pointer w-12 h-12 flex justify-center items-center text-xl'>
      <FiTrash/>
     </div>
     </div>
    </div>
  )
}

export default Sidebar
