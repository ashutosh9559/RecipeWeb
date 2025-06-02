import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([]) //  initialize as array
const[viewID,setViewID]=useState(false)
const handleView=(id)=>{
  navigate(`/products/detail/${id}`);
  setViewID(id)
}

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=12') // fetch multiple recipes
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes) //  data.recipes is an array
        console.log(data.recipes)
      })
      .catch(err => console.error("Fetch Error", err))
  }, [])

  return (
    <div className='md:mt-4 mt-10 px-4 '>
    <h1 className='font-bold md:text-4xl text-center text-green-900 text-2xl mb-6 mt-4 mx-22   '>Explore the Recipes From Around the World</h1>
    <p className='text-center font-bold text-gray-600 mb-6 '>Discover A Wide Variety of <span className='text-green-600'> Veg</span> and <span className='text-amber-800'>Non-Veg</span> delights- all in one place!</p>
    <p className='font-bold text-center mx-22 mb-15 mt-5 text-[22px]'>Discover a handpicked collection of global recipes — from rich Indian curries to classic Italian pastas, fiery Mexican dishes to cozy American favorites. Whether you're a vegetarian, a non-veg lover, or somewhere in between, every recipe is tested, trusted, and made simple with step-by-step guidance. Delicious, diverse, and made for every kitchen.</p>
    <p className='mx-22 mt-2 mb-5 font-bold text-[35px]'>Latest  Posts</p>
    <p className='text-black mx-22 mt-2 mb-5   text-[22px]'>Recently published new recipes.</p>
    {recipes.length==0 ?(<p className='text-green-500 animate-pulse text-2xl mx-5 '>Loading recipes...</p>) :(<div className='flex flex-wrap mx-22 gap-2'>
     {recipes.map((item)=>(
      <div key={item.id} className='bg-white w-80  shadow-md mt-5 rounded-md p-4 hover:shadow-lg transition'>
       <img  className="w-full h-48 object-cover rounded" alt={item.name} src={item.image}/>
       <h2 className='mt-3 text-lg font-semibold'>{item.name}</h2>
       <h3 className='text-[15px] font-bold mb-1 '>Difficulty <span className='text-red-800 text-[12px]'>{item.difficulty}</span></h3>
       <div className='flex items-center mt-2'>
       <span className='font-bold text-[20px] bg-green-800 border w-35 m-2 '>{"⭐".repeat(Math.round(item.rating))}</span>
       <span className='mb-2 text-[12px]'>{item.rating}</span>
       </div>
       <br/>
       <button onClick={()=>handleView(item.id)} className='  text-black border-2 rounded-sm  p-1 border-black hover:text-white shadow:shadow-lg transition hover:scale-90 cursor-pointer hover:bg-blue-950 '>{viewID==item.id ?"Go to Bellow":"View Details"}</button>
      </div>
     ))}
    </div>)}
    <Outlet/>
    </div>
  )
}

export default Products
