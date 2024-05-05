import ProductCard from "./ProductCard.jsx";

function ProductList(props) {

  return (
    <div className="product-list container">

      {props.products
      .filter((eachProduct)=>{
        return eachProduct.ingredientes.toLowerCase().includes(props.searchValue.toLowerCase())
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