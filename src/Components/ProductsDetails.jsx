import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()  // ✅ Get ID from URL
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)  // here we use id got from Product via is params useParom get id prom url 
      .then(res => res.json())
      .then(data => setRecipe(data))
      .catch(err => console.error("Error fetching recipe:", err))
  }, [id])

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/products")}
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-900"
      >
        ⬅ Back to Products
      </button>

      {recipe ? (
        <div className="bg-white shadow-md rounded p-4">
          <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-60 object-cover rounded mb-4"
          />
          <p className="text-xl  mb-4">Type: {recipe.tags[0]}</p>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
          <p className="mt-3"><strong>Instructions:</strong></p>
          
          <ul className="list-disc ml-6 text-gray-700">
            {recipe.instructions?.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Loading recipe details...</p>
      )}
    </div>
  )
}

export default ProductsDetails
