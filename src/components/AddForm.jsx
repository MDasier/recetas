import { useState } from "react"

function AddForm(props) {

  const [nameValue, setNameValue] = useState("")
  const [priceValue, setPriceValue] = useState(0)
  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  }
  const handlePriceChange = (event) => {
    setPriceValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()//esto detiene cualquier comportamiento predeterminado del evento
    //console.log("intentando crear un nuevo producto")

    //creamos un nuevo producto
    const newProduct = {
      name:nameValue,
      price:priceValue,
      isPurchased: false
    }/*

    //?CLONAR ARRAY PARA MODIFICARLO
    //clonamos el array original para poder modificarlo
    const clone = JSON.parse(JSON.stringify(props.allProducts))
    clone.push(newProduct)//añadimos el producto nuevo al clon
    props.setAllProducts(clone)//actualizamos el original con el clon
    */

    //props.setAllProducts([...props.allProducts,newProduct])
    //?lo mismo que el codigo comentado de linea 24 pero en una linea gracias a SPREAD

    props.setAllProducts( (allProducts) => {
      return [...allProducts, newProduct]
    })//*setAllProducts INTERNAMENTE tiene acceso al valor del ESTADO(useState) en este caso "AllProducts".

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <input type="text" name="name" placeholder="nombre del producto..." onChange={handleNameChange} />
        </div>

        <div>
          <input type="number" name="price" placeholder="precio..." onChange={handlePriceChange} />
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm