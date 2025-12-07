import React from 'react'
import { assets } from '../assets/assets.js'
import { Link,NavLink } from 'react-router-dom'


const Navbar = () => {

  const [visible, setVisible] = React.useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt='logo' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' end className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='nav-underline w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='nav-underline w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='nav-underline w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>
        
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='nav-underline w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt='search' className='w-4 cursor-pointer' />

        <div className='group relative'>
          <img src={assets.profile_icon} alt='profile' className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute top-6 right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt='cart' className='w-5 min-w-5' />
            <p className='absolute -right-2 -bottom-2 w-5 h-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[10px] font-bold'>10</p>
          </Link>
          <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt='menu' className='w-5 cursor-pointer sm:hidden' />
        </div>

        {/* Mobile Menu */}

        {visible && (
          <div className="absolute inset-0 z-50 bg-white">
            <div className="flex flex-col text-gray-600">
              <div className="flex items-center gap-4 p-3">
                <button onClick={() => setVisible(false)} className="p-2">
                  <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="dropdown" />
                </button>
                <p className="font-medium">Back</p>
              </div>

              <nav className="flex flex-col p-4 gap-3">
                <Link to='/' onClick={() => setVisible(false)} className="py-2">Home</Link>
                <Link to='/collection' onClick={() => setVisible(false)} className="py-2">Collection</Link>
                <Link to='/about' onClick={() => setVisible(false)} className="py-2">About</Link>
                <Link to='/contact' onClick={() => setVisible(false)} className="py-2">Contact</Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>

    
  )
}

export default Navbar
