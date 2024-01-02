import React from 'react'
import Image from '../components/shop.png'


const Hero = () => {
  return (
    <div className=' bg-rose-200 h-[500px] py-24 '>
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center flex-col md:flex-row">
        <div>
        <div className=' font-semibold'>New Trend</div>
        <h1 className=' text-[50px] md:text-[70px] mb-4 uppercase'>Customers Love Our Quality Products.</h1>
        </div>
        <div className=' hidden lg:block'>
          <img src={Image} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
