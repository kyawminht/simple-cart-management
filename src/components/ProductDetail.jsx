import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from './productContext';
import { CartContext } from './CartContextProvider';

const ProductDetail = () => {
  // Get product id from URL
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Get single product using id
  const product = products.find((item) => item.id === parseInt(id));

  // Check if product is undefined
  if (!product) {
    // Render a message or redirect to a not-found page
    return (
      <div className="pt-32 pb-6 lg:py-32 h-screen flex justify-center">
        <div className="container mx-auto">
          <p className="text-red-500 text-xl font-bold">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-32 pb-6 lg:py-32 h-screen flex justify-center'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className='flex-1 justify-center items-center mb-8'>
            <img src={product.image} className='max-w-[200px] lg:max-w-sm' alt="" />
          </div>
          <div className='flex-1 lg:text-left'>
            <h1 className="text-xl font-bold mb-5">{product.title}</h1>
            <div className="text-xl text-red-400 mb-5">{product.price}</div>
            <div className="mb-5">{product.description}</div>
            <button onClick={() => addToCart(product, product.id)} className='bg-slate-700 text-white px-8 py-4 hover:scale-105 duration-300'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
