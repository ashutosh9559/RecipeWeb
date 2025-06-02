import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { foodcontext } from "./context/CreateContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create=()=>{
   const { data, setData } = useContext(foodcontext); 
const { register, handleSubmit, reset } = useForm();
const navigate=useNavigate()

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
   const copydata=[...data]
   copydata.push(recipe)
    setData(copydata);
    localStorage.setItem("recipes",JSON.stringify(copydata)); 
   toast.success("New Recipe Created")
    reset();  
    navigate("/recipes")
  };
  return (
    <div className="flex justify-center m-4 items-center  bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">   
<form className=" m-10  bg-green-50 opacity-80 rounded-xl mt-10   flex justify-center  items-center border-blue-950 border-2 flex-col md:w-160 w-90" onSubmit={handleSubmit(submitHandler)}>
  <label className="font-bold text-2xl">Recipe</label>
 
 <label className="mt-7 font-bold ">Title <input  {...register("title")} placeholder="Title" type="text" required  className="outline-0 border-b-2 font-bold p-2" /></label>
 <label className="mt-7 font-bold">Image <input {...register("imageUrl")} placeholder="Paste the URL here" type="url" className="outline-0 border-b-2 font-bold p-2"/></label>
 <select {...register("option")}  className=" outline-0 mt-8 border-b-2 font-bold">
  <option   value="veg">Veg</option>
  <option  value="non-veg">Non-Veg</option>
  <option  value="dessert">Dessert</option>
   <option value="beverage">Beverage</option>
 </select >
 <select  className=" outline-0 mt-8 border-b-2 font-bold" {...register("difficulty")} required>
    <option value="">Select Difficulty</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>
  <label  className="font-bold text-2xl mt-8 ">Ingredients</label>
   <textarea  className=" outline-0 border-3 rounded-sm lining-nums md:w-100 w-90 h-40 mt-2" {...register("ingredients")} placeholder="Ingredients" type="text"/>
   <label  className=" mt-8 font-bold text-2xl">Recipe</label>
 <textarea className=" outline-0 border-3 rounded-sm lining-nums md:w-100 w-90 h-40 mt-2" {...register("recipe")} placeholder="Type the recipe" type="text"/>
  <button className=" hover:bg-blue-950 border border-black  hover:text-white bg-white p-4 cursor-pointer text-black md:w-95 w-88 h-5  m-10 flex items-center justify-center rounded-sm ">Cook</button>
</form>
 
    </div>
  )
}
export default Create;