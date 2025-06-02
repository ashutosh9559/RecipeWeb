import React from 'react'
import logo from "../assets/Logo.png"
const About = () => {
  return (
    <>
    <div className=' flex flex-col justify-center items-center  bg-[#131D4F]'>
      <img className='w-40 h-40 rounded-full object-cover shadow-lg mt-5' alt='photo' src='https://images.pexels.com/photos/8511835/pexels-photo-8511835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
      <div className='mt-6 bg-gray-200 p-6 rounded-xl max-w-xl text-center '>
      <p className='  text-lg md:text-2xl'> Hello! I'm a passionate developer and foodie with a love for creating beautiful, functional web experiences and exploring new cuisines. I believe that just like a good dish, every line of code should have the perfect balance of creativity and structure. </p>
    </div>
    <footer className=' mt-10 w-full bg-gray-500 text-white py-8'>
      <div className="flex flex-col items-center">
     <img className='h-20 w-20 rounded-full shadow-lg' src={logo} alt='logo'></img>
      </div>
 <div className='flex flex-wrap justify-center gap-4 mt-6 px-4'>
            <a className='bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' href='https://en.wikipedia.org/wiki/Facebook'>Facebook</a>
            <a className='bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' href='https://en.wikipedia.org/wiki/Facebook'>Insta</a>
            <a className='bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' href='https://en.wikipedia.org/wiki/Facebook'>Page</a>
            <a className='bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' href='https://en.wikipedia.org/wiki/Facebook'>Blog</a>
            <a className='bg-gray-600 px-4 py-2 rounded hover:bg-gray-700' href='https://en.wikipedia.org/wiki/Facebook'>ID</a>
          </div>
    </footer>
    <div className='opacity-50'><p>Created By AshuTosh</p></div>
    </div>
    </>
  )
}

export default About