import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ShoppingList from "./pages/ShoppingList.jsx"
import NotFound from './pages/NotFound.jsx'

function App() {

  return (
    <>

      {/* If using react routing, the route structure and pages should be here along with ShoppingList */}
      <BrowserRouter>
      
      <Routes>
        <Route path='/recetas/' element={<ShoppingList />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
