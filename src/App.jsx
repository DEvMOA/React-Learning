import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCart } from './pages/ShopingCart'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/admin/product" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
