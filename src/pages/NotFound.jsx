import { Link } from "react-router-dom"


function NotFound() {
  return (
<>
        <h1>¡Ups! Receta no encontrada</h1>
    <div class="search-bar container">
    <p>La página que buscas no está disponible.</p>
    <Link to={"/recetas/"}><p>Volver a la página de inicio 🔙</p></Link>
    </div>
    </>
  )
}

export default NotFound