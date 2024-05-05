
function SearchBar(props) {

  const handleSearch = (event) => {
    props.setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar container">
      
      { <a href="https://www.instagram.com/left.nutrition/" target="_blank"> @left.nutrition 📷</a> }
        
      <input type="text" placeholder="Buscar receta..." value={props.searchValue} onChange={handleSearch}/>

    </div>
  )
}

export default SearchBar