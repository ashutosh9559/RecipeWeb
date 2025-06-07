import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])
  const [viewID, setViewID] = useState(null)

  const handleView = (id) => {
    navigate(`/products/detail/${id}`)
    setViewID(id)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/recipes?limit=12')
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes || [])
      })
      .catch(err => console.error("Fetch Error", err))
  }, [])

  return (
    <div className='md:mt-4 mt-10 px-4'>
      <h1 className='font-bold md:text-4xl text-center text-green-900 text-2xl mb-6 mt-4'>Explore the Recipes From Around the World</h1>
      <p className='text-center font-bold text-gray-600 mb-6'>
        Discover A Wide Variety of <span className='text-green-600'> Veg</span> and <span className='text-amber-800'>Non-Veg</span> delights!
      </p>
      <p className='font-bold text-center mb-4 text-[22px]'>
        Discover a handpicked collection of global recipes — Indian curries, Italian pastas, Mexican delights and more!
      </p>
      <p className='text-[28px] font-bold mt-6'>Latest Posts</p>
      <p className='text-black mt-1 text-[20px] mb-4'>Recently published new recipes.</p>

      {recipes.length === 0 ? (
        <p className='text-green-500 animate-pulse text-2xl'>Loading recipes...</p>
      ) : (
        <div className='flex flex-wrap gap-4 justify-center'>
          {recipes.map((item) => (
            <div key={item.id} className='bg-white w-80 shadow-md mt-5 rounded-md p-4 hover:shadow-lg transition'>
              <img className="w-full h-48 object-cover rounded" alt={item.name} src={item.image} />
              <h2 className='mt-3 text-lg font-semibold'>{item.name}</h2>
              <h3 className='text-[15px] font-bold mb-1'>Difficulty: <span className='text-red-800 text-[12px]'>{item.difficulty}</span></h3>
              <div className='flex items-center mt-2'>
                <span className='font-bold text-[20px] text-yellow-500 mr-2'>{"⭐".repeat(Math.round(item.rating))}</span>
                <span className='text-[12px]'>{item.rating}</span>
              </div>
              <button
                onClick={() => handleView(item.id)}
                className='mt-3 w-full text-black border-2 rounded p-1 border-black hover:text-white hover:bg-blue-950 transition hover:scale-95'
              >
                {viewID === item.id ? "Go to Below" : "View Details"}
              </button>
            </div>
          ))}
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default Products
