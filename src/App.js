import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';


function App() {
  return ( <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenido!" />} />
          <Route path='/:id' element={<ItemListContainer greeting="Bienvenido!"/>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='item/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
