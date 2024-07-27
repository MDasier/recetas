
function SearchBar(props) {

  const handleSearch = (event) => {
    props.setSearchValue(event.target.value)
  }

  return (
    <div className="search-bar container">
      <h1 className='titulo'><a href="https://www.instagram.com/left.nutrition/" target="_blank" > Las recetas de Marina 📷</a></h1>
        
      <input type="text" placeholder="Qué estás buscando..." value={props.searchValue} onChange={handleSearch}/>

    </div>
  )
}

export default SearchBar