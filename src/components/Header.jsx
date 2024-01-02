import React, { useContext, useEffect, useState } from 'react'
import { sidebarContext } from './SidebarProvider'
import { BsBag } from 'react-icons/bs'
import { CartContext } from './CartContextProvider';
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  const [isActive,setIsActive]=useState(false);
    const {isOpen,setIsOpen}=useContext(sidebarContext);
    const {itemAmount}=useContext(CartContext);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
      });
    },[]);
  return (
    <div className={` ${isActive ? ' bg-white py-4 shadow-md' :  ' bg-none py-6'} w-full fixed z-10 transition-all px-10 md:px-16 lg:px-20`}>
     <div className="container mx-auto flex items-center justify-between">
     <Link to={'/'} className=' cursor-pointer'>
      <FaShopify className=' text-5xl' />
      </Link>
      <div className=" relative cursor-pointer max-w-[50px]" onClick={()=>setIsOpen(!isOpen)}>
        <BsBag className=' text-2xl '/>
        <div className=' bg-red-500 absolute -right-2 -bottom-2 w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
          {itemAmount}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Header
