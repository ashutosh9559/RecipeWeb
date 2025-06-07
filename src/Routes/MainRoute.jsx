import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../Components/Home";
import Recipes from "../Components/Recipes";
import About from "../Components/About";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";
import Create from "../Components/Create";
import Details from "../Components/Details";
import PageNotFound from "../Components/PageNotFound";

const MainRoute=()=>{
  return (
    <>
    <Routes>
      < Route path='/' element={<Home/>}/>
      <Route path="/products" element={<Products/>}>
       { <Route path="detail/:id" element={<ProductsDetails/>}/>   /* This id get from Product when click "view details" navigate(`/products/detail/${item.id}) */}
      </Route>
      <Route path="/recipes" element={<Recipes />}/>
      < Route path='/about' element={<About/>}/>
       < Route path='/create' element={<Create/>}/> 
       <Route path="/recipes/details/:id" element={<Details />} />
      < Route path='*' element={<PageNotFound/>}/> 
    </Routes>
    </>
  )
}
export default MainRoute;