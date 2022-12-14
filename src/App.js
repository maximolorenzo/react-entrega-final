import NavBar from './components/navbar/NavBar.js'
import './App.css';
import ItemListConteinter from './components/ItemListConteiner/ItemListConteiner.js';
import ItemDitalConteiner from './components/ItemDetailConteiner/ItemDitalConteiner.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart.js'
import {CartContextProvider} from './context/CartContext'
import Form from './components/Form/Form.jsx'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>

      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<ItemListConteinter greetings = "Bienvenidos !" />}  />
            <Route path='/category/:category' element = {<ItemListConteinter greetings = "Bienvenidos !" />}  />
            <Route path='/product/:id' element = {<ItemDitalConteiner />} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/form' element = {<Form/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
  </>
  );
}

export default App;
