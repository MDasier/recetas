import { useState } from "react"

function SearchBar(props) {

  const handleSearch = (event) => {
    props.setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar container">
      
      {/* <h2>Buscar receta:</h2> */}
        
      <input type="text" placeholder="Buscar receta..." value={props.searchValue} onChange={handleSearch}/>

    </div>
  )
}

export default SearchBar