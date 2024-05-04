import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingList() {
  const [searchValue,setSearchValue] = useState("")
  const [ allProducts, setAllProducts ] = useState(testProducts) 
  const [isFormShowing,setIsFormShowing] = useState(false)

  const handleShowForm =()=>{setIsFormShowing(!isFormShowing)}

  return (
    <>
      {/* <button onClick={handleShowForm}>Show Add Form</button> */}
      

      {isFormShowing && <AddForm 
      allProducts={allProducts}
      setAllProducts={setAllProducts}/>}

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