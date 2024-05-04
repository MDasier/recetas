function ProductCard(props) {
  const handleChecked = () => {
    //*pasamos un callBack a setAllProducts para tener acceso al valor actual del estado (STATE,setState)
    props.setAllProducts((estadoActual)=>{
      const clone = JSON.parse(JSON.stringify(estadoActual)) 
      /*if(clone[props.index].isPurchased === true ){
        clone[props.index].isPurchased = false
      }else{
        clone[props.index].isPurchased = true
      }*/
      clone[props.index].isPurchased = !clone[props.index].isPurchased//?cambio de valor del checheo(isPurchased)


      
  /* TIPOS DE DIETAS
  ["vegana","vegetariana","gluten free","sin lactosa","perdida peso","ganacia muscular","sin azucar","low carb","keto"]
  */

      return clone
    })
  }

  return (
    <div className="product-card">
      <h3>{props.eachProduct.receta}</h3>
      <p>{props.eachProduct.dificultad}</p>
      <p>{props.eachProduct.tiempo} min</p>
      {/*eachProduct.isPurchased === true ? ✅ : 🟡 ⚖️⬇️ ⬆️  🌾🆓  🥬*/}
      {/*props.eachProduct.tipo === "ganancia muscular" && "💪"
       */}
      <p>{props.eachProduct.tipo === "gluten free" ? "🌾🆓" : props.eachProduct.tipo === "ganancia muscular" ? "💪" : props.eachProduct.tipo === "perdida peso" ? "⚖️⬇️" : "🥬"}</p>
      {/* <button onClick={handleChecked}>Check</button> */}
    </div>
  );
}

export default ProductCard;
