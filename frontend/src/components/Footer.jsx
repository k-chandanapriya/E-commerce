import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-400'>
            <div>
                <img src={assets.logo} className='mb-5 w-32'></img>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore hic officia quam! Qui sed laboriosam ullam recusandae cum odit, modi fugit ipsa assumenda sequi atque esse quod numquam quae!r
                </p>
                            
            </div>
            <div>
                <p className='text-xl font-mediium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9959756610</li>
                    <li>conatct@info.de</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@forever.comm - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer

