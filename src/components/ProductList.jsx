import ProductCard from "./ProductCard";

function ProductList(props) {

  return (
    <div className="product-list container">

      {props.products
      .filter((eachProduct)=>{
        return eachProduct.receta.toLowerCase().includes(props.searchValue.toLowerCase())
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