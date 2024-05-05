import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ShoppingList from "./pages/ShoppingList"
import NotFound from './pages/NotFound'

function App() {

  return (
    <>

      {/* If using react routing, the route structure and pages should be here along with ShoppingList */}
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<ShoppingList />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
