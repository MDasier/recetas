import ProductCard from "./ProductCard";

function ProductList(props) {
  
  return (
    <div className="product-list container">
      
      <h2>LISTA DE RECETAS</h2>

      {props.products
      .filter((eachProduct)=>{
        return eachProduct.receta.includes(props.searchValue.toLowerCase())
      })
      .map((eachProduct, index) => {
        return (
          <ProductCard 
          key={index} 
          eachProduct={eachProduct} 
          index={index}
          setAllProducts ={props.setAllProducts}/>
        )
      })}

    </div>
  )
}

export default ProductList