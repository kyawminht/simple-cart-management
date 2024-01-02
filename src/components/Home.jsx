import React, { useContext } from 'react'
import { ProductContext } from './productContext'
import Product from './Product';
import Hero from './Hero';

const Home = () => {
    const {products}=useContext(ProductContext);
    
  return (
    
    <div>
      <Hero/>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-4 py-16 gap-10'>
      {
        products.map(product=>(
            <Product key={product.id} product={product}/>
        ))
      }
    </div>
    </div>
  )
}

export default Home
