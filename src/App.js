
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido!" />} />
        <Route path='/:id' element={<ItemListContainer greeting="Bienvenido!"/>} />
        <Route path='item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
