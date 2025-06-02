import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { foodcontext } from './context/CreateContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
const Details = () => {
  const star=new Array(5).fill(0)
   const [rating, setRating] = useState(0);
  const handleClick = (ind) => {
  setRating(ind + 1);
 
};
  const { id } = useParams();
  const { data, setData } = useContext(foodcontext);
  const recipe = data.find((item) => item.id === id);
  const { register, handleSubmit } = useForm({
    defaultValues:recipe ?{
      title:recipe.title,
      imageUrl:recipe.imageUrl,
      option: recipe.option,
      ingredients:recipe.ingredients,
      difficulty: recipe.difficulty,
      recipe: recipe.recipe,
  }:{}});
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <h2 className="text-center mt-10 text-red-500">Recipe not found</h2>;
  }

  // Submit handler for updating recipe
  const submitHandler = (recipe) => {
    const index = data.findIndex((item) => item.id === id);
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], ...recipe };
    setData(updatedData);
    localStorage.setItem("recipes",JSON.stringify(updatedData))
    toast.success("Recipe updated successfully!");
    setIsEditing(false);
  };
const deleteHandler=()=>{
  const deleteData=data.filter((recipe)=>recipe.id !=id)
  setData(deleteData)
  localStorage.setItem("recipes",JSON.stringify(deleteData ))
   toast.success("Recipe deleted successfully!");
    navigate('/');
}
  // Show edit form
  if (isEditing) {
    return (
      <div className="flex justify-center m-4 items-center bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <form
          className="m-10 bg-green-50 opacity-90 rounded-xl p-10 border-2 border-blue-950 flex flex-col w-full max-w-xl"
          onSubmit={handleSubmit(submitHandler)}
        >
          <label className="font-bold text-2xl mb-4">Edit Recipe</label>

          <label className="mt-4 font-bold">Title</label>
          <input
            {...register('title')}
           
            type="text"
            className="outline-0 border-b-2 font-bold p-2"
            required
          />

          <label className="mt-4 font-bold">Image URL</label>
          <input
            {...register('imageUrl')}
            
            type="url"
            className="outline-0 border-b-2 font-bold p-2"
          />

          <label className="mt-4 font-bold">Category</label>
          <select {...register('option')}  className="outline-0 border-b-2 font-bold p-2">
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverage</option>
          </select>

          <label className="mt-4 font-bold">Difficulty</label>
          <select {...register('difficulty')}  className="outline-0 border-b-2 font-bold p-2">
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label className="mt-4 font-bold">Ingredients</label>
          <textarea
            {...register('ingredients')}
      
            className="outline-0 border rounded p-2"
          />

          <label className="mt-4 font-bold">Instructions</label>
          <textarea
            {...register('recipe')}
            
            className="outline-0 border rounded p-2"
          />

          <button type="submit" className="mt-6 bg-black text-white p-3 rounded hover:bg-green-700">
            Update Recipe
          </button>
        
        </form>
      </div>
    );
  }

  // View Mode
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full border-2 border-black h-74 object-cover rounded-md mb-4"
      />
      <div className="flex justify-center m-10 gap-2">
        <h1 className="text-3xl text-center font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-700 mb-2 text-center font-bold uppercase">{recipe.option}</p>
      </div>
      <p className="text-gray-700 mb-2 mx-40">
        <span className="font-bold">Difficulty:</span> {recipe.difficulty}
      </p>

      <h2 className="text-xl text-center font-bold mt-6 mb-8">Ingredients</h2>
      <ul className="list-disc text-center list-inside mb-4">
        {Array.isArray(recipe.ingredients) ? (
          recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)
        ) : (
          <li className="font-semibold">{recipe.ingredients}</li>
        )}
      </ul>

      <h2 className="text-xl text-center font-bold mb-2">Instructions</h2>
      <p className="text-gray-800 font-semibold">{recipe.recipe}</p>
       <div className='flex justify-around'>
      <button
        className="mt-10 bg-white text-black border border-green-950 rounded-xl p-2 hover:bg-green-950 cursor-pointer hover:text-white"
        onClick={() => setIsEditing(true)}
      >
        Edit Your Recipe
      </button>
      <div className='flex'>
      <button  className='text-3xl flex mt-10  font-bold '>{star.map((_,i)=><FaStar key={i} onClick={()=>handleClick(i)} className={`cursor-pointer ${rating>i? 'text-yellow-500':'text-gray-400'}`}/>)}</button>
      <p className={`mt-5 mx-2 font-bold ${rating>3?"text-white bg-green-500 flex justify-center w-5 h-6 rounded-full":"text-red-700 bg-amber-200 flex justify-center w-5 h-6 rounded-full"}`}>{`${rating} `}</p><p className='mt-5 mx-2 font-bold w-4'>{`${rating==1 && 'Bad' || rating==2 && "Bad" || rating==3 && "Good" || rating>3 && "Excellent"}`}</p>
      </div>
       <button onClick={()=>deleteHandler()} className="mt-10 bg-black cursor-pointer text-white p-2  rounded hover:bg-red-700">
            Delete Recipe
          </button>
      </div>
    </div>
  );
};

export default Details;
