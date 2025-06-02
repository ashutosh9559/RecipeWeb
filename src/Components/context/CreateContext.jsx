import React, {  createContext, useEffect, useState } from 'react'

export const foodcontext=createContext(null)
const CreateContext = ({children}) => {
  const [data,setData]=useState([])
 console.log(data);
 useEffect(()=>{
  setData(JSON.parse(localStorage.getItem("recipes")) || [])
 },[]);
  return (
   
     <foodcontext.Provider value={{data,setData}}>
       {children}
     </foodcontext.Provider>
  
  )
}

export default CreateContext