import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
const Navbar=()=>{
 const[click,setClick]=useState(false)
  return (
    <div >
      <div className="h-20  w-full flex justify-between font-semibold md:px-20 px-6 bg-[#000] text-white items-center">
       <img className="h-16 w-20  object-cover overflow-hidden"  src={logo} alt="logo" />
        <div className="h-20 hidden md:flex gap-8 justify-between rounded w-full    font-semibold md:px-20 px-6 bg-[#000] text-white items-center">
    <NavLink className= {({isActive})=> ` ${isActive ?  "text-yellow-300" :"hover:text-yellow-300  underline-animation"}`} to="/" >Home</NavLink>
    <NavLink  className={({isActive})=>`  ${isActive ?  "text-yellow-300" :"hover:text-yellow-300  underline-animation"}`} to='/products' >Products</NavLink>
     <NavLink to="/create" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:text-yellow-300 underline-animation"}>Create Recipes</NavLink>
    <NavLink  className={({isActive})=>`  ${isActive ?  "text-yellow-300" :"hover:text-yellow-300  underline-animation"}`} to="/recipes" >Recipes</NavLink>

    
         <NavLink  className={({isActive})=>`  ${isActive ?  "text-yellow-300" :"hover:text-yellow-300  underline-animation"}`} to="/about">About</NavLink>
    </div>
        <button onClick={()=>setClick(!click)} className="md:hidden block text-4xl px-10" to="#">&#8801;</button>
    </div>
    {click && (
          <div className=" mx-7 md:hidden  bg-white flex flex-col px-6 py-4 gap-4 shadow h-50 w-40 ">
          <NavLink to="/" className="text-black hover:text-yellow-500">Home</NavLink>
          <NavLink to="/products" className="text-black hover:text-yellow-500">Products</NavLink>
          <NavLink to="/recipes" className="text-black hover:text-yellow-500">Recipes</NavLink>
          <NavLink to="/about" className="text-black hover:text-yellow-500">About</NavLink>
          <NavLink to="/create" className="text-black hover:text-yellow-500">Create Recipes</NavLink>
        </div>

    )}
    </div>
  )
}
export default Navbar;