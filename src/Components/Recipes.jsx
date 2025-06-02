import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { foodcontext } from "./context/CreateContext";
import { SiCodechef } from "react-icons/si";

const Recipes=()=>{
  
  const {data}=useContext(foodcontext)
 const navigate=useNavigate()
 return (
  < div className="min-h-screen   w-full bg-[#131D4F] py-6 px-4">
{data && data.length>0 ? <div className="flex flex-wrap justify-center gap-6 p-6 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-95 sm:w-80  rounded-lg overflow-hidden shadow-lg bg-white transition duration-300 "
        >
          {/* Image */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-58 object-cover"
          />

          {/* Overlay gradient */}
          <div className=" w-full bg-gradient-to-b from-black to-transparent p-4">
            <h2 className="font-bold text-white hover:text-green-800 uppercase text-2xl">{
    item.title.split(" ").length > 2
      ? item.title.split(" ").slice(0, 2).join(" ") + "..."
      : item.title
  }</h2>
          </div>

          {/* Info below image (optional) */}
          <div className="bg-white px-4 py-2">
            <p className="text-sm text-green-900  mb-2 uppercase font-bold"> {item.option}</p>
            <button
             onClick={() => navigate(`/recipes/details/${item.id}`)}
              className=" px-5 py-2  text-sm font-semibold rounded-md border border-blue-600 text-blue-600 bg-white transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
            >
              See Recipe
            </button>
          </div>
          
        </div>
        
      ))}
 </div> : (
  <div className="min-h-screen rounded-md p-4 flex flex-col items-center justify-center">
    <div className="flex flex-col md:flex-row animate-pulse space-y-6 md:space-y-0 md:space-x-8 items-center w-full">
      
      <div className="w-40 h-40 rounded-xl bg-gray-200"></div>

      <div className="flex-1 space-y-4 py-2 w-full max-w-xl">
        <div className="h-2 rounded bg-gray-200 w-1/2 mx-auto"></div>

        <div className="space-y-6 text-center">
          <h1 className="font-bold text-xl text-white flex flex-col items-center">
            <SiCodechef className="text-4xl mb-2 text-white" />
            You haven't created any recipes yet!
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
            <div className="col-span-1 md:col-span-2 h-2 rounded bg-gray-200"></div>
            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
          </div>

          <div className="h-2 rounded bg-gray-200 w-3/4 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
)}

  </div>
 )

   
  
}

export default Recipes;