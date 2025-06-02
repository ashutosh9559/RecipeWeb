import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { foodcontext } from "./context/CreateContext";
import { SiCodechef } from "react-icons/si";

const Recipes=()=>{
  
  const {data}=useContext(foodcontext)
 const navigate=useNavigate()
 return (
  < div className="min-h-screen w-full bg-[#131D4F] py-6 px-4">
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
    </div>: (
        <div class="min-h-screen  rounded-md p-2">
  <div class="flex animate-pulse space-x-8">
    <div class="size-40 rounded-xl bg-gray-200"></div>
    <div class="flex-1 space-y-2 py-2">
      <div class="h-2 rounded bg-gray-200"></div>
      <div class="space-y-20">
        <h1 className="font-bold text-xl text-white w-full mx-80"><SiCodechef className="mx-40" />You haven't Create any Recipes yet !  </h1>
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-2 h-2 rounded bg-gray-200"></div>
          <div class="col-span-1 h-2 rounded bg-gray-200"></div>   
        </div>
        <div class="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>
      )}
  </div>
 )

   
  
}

export default Recipes;