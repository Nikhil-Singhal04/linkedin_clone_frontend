import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Navbar = () => {
  // destructuring current user from redux store
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='h-20 bg-blue-500 flex justify-between px-5 items-center'>
        {/* user image */}
        <div className='flex items-center gap-2'>
            <img className="w-16 h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4fSImleV6t5kyYU067ZPx8sSHHixQ_-8Og&s" alt="user_profile"></img>
        
         <div>
          <p className='text-white font-semibold'>{currentUser?.email}</p>
        </div>
        </div>
        {/* search bar */}

        <div>
            <input 
            className='bg-white p-3 border-2 rounded-lg outline-none'
            type="text" 
            placeholder='Search..'/>
        </div>

        <div className='flex items-center'>
            <div>
                <IoNotifications className='text-white text-4xl font-semibold cursor-pointer'/>
            </div>
            <div>
            <h1 className='text-white font-semibold text-3xl px-2'>LinkedIn</h1>
            </div>
            {/* linkedin logo */}
     <img
          className="w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd59I5VJJPg2VoucJNvnuqK2-_gmUVqIzvdA&s"
          alt="linkedin_logo"/>
        </div>
    </div>
  )
}

export default Navbar
