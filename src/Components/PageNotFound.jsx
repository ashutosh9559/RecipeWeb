import React from 'react'
import { FaCircleNotch } from "react-icons/fa";
const PageNotFound = () => {
  return (
  <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="font-bold text-3xl text-center animate-pulse"><FaCircleNotch className='animate-spin mx-25 mb-6' />Page Not Found</h1>
</div>
  )
}

export default PageNotFound