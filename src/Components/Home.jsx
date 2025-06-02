import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
     <div className=" relative h-screen w-full bg-cover  bg-center  overflow-hidden bg-gray-300 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className='  h-full w-300 absolute inset-0 bg-gradient-to-r from-black to-transparent z-10'></div>
      <div className="relative z-20 p-3 px-20 text-white">
        <h1 className='md:mx-10  mx-5 font-bold text-[35px] md:text-[60px]  md:w-120 mt-60'>Welcome to the Food Bus</h1>
        <button className='  bg-yellow-800 mt-10 font-bold m-x-5 md:mx-10 rounded-xl h-15 w-40 cursor-pointer hover:bg-yellow-900' onClick={()=>navigate("/products")}>See Them All</button>
      </div>
    </div>
  )
}

export default Home