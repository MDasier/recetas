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
<<<<<<< HEAD
=======
        <Route path='/' element={<ShoppingList />}/>
>>>>>>> 818ae54069d234fc2a0dce40e8717da455f045be
        <Route path='/recetas/' element={<ShoppingList />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
