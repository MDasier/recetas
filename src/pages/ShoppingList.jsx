import { useState } from "react";

import AddForm from "../components/AddForm.jsx";
import ProductList from "../components/ProductList.jsx";
import SearchBar from "../components/SearchBar.jsx";

// this data is just for testing the initial rendering of data
import recetas from "../data/recetas.json";

function ShoppingList(props) {
  const [searchValue,setSearchValue] = useState("")
  const [ allProducts, setAllProducts ] = useState(recetas) 
  const [isFormShowing,setIsFormShowing] = useState(false)

  const handleShowForm =()=>{setIsFormShowing(!isFormShowing)}

  return (
    <>
      {/* <button onClick={handleShowForm}>Show Add Form</button> */}
      

      {isFormShowing && <AddForm 
      allProducts={props.allProducts}
      setAllProducts={props.setAllProducts}/>}

      <SearchBar
      searchValue={searchValue}
       setSearchValue={setSearchValue}/>

      <ProductList 
      products={allProducts} 
      searchValue={searchValue}
      setAllProducts={setAllProducts}/>
    </>
  )
}

export default ShoppingList