import React, { useContext } from 'react'
import { BsPlus } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { BsEyeFill } from "react-icons/bs";
import { CartContext } from './CartContextProvider';
const Product = ({product}) => {

  const {addToCart}=useContext(CartContext);

  return (
   <div>
     <div className=" mt-20 border border-white h-[300px] relative overflow-hidden group transition mb-5 shadow-md rounded-md">
      <Link to={`/product/${product.id}`} className=" w-full h-full justify-center items-center">
        <img src={product.image} className=' w-[200px] mx-auto flex justify-center max-h-[160px] group-hover:scale-105 transition-all ease-in-out duration-200 p-5' alt="" />
      </Link>
      <div className=" absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-3000">
        <button onClick={() => addToCart(product,product.id)}>
          <div className="flex justify-center items-center w-12 h-12 text-white bg-red-500">
          <BsPlus className=' text-2xl'/>
          </div>
        </button>
        <Link to={`/product/${product.id}`} className=' w-12 h-12 flex justify-center items-center bg-white text-primary drop-shadow-xl'>
        <BsEyeFill />
        </Link>
      </div>
      
    </div>
    {/* category ,title , price*/}
    <div className="">
          <div className=" text-sm capitalize text-gray-500 mb-1">{product.category}</div>
          <Link to={`product/${product.id}`}>
          <div className=' font-semibold mb-1'>{product.title}</div>
          </Link>
          <div className=' font-semibold'>$ {product.price}</div>

      </div>
   </div>
  )
}

export default Product
