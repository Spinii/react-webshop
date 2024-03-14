import './App.css'
import { Header } from './components/Header/Header'
import { MainComponent } from './components/MainComponent/MainComponent'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/Pages/About'
import { Shop } from './components/Pages/Shop'
import { Contact } from './components/Pages/Contact'
import { Product } from './components/Pages/Product'
import { SingleProduct } from './components/Pages/SingleProduct'
import { Cart } from './components/Pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} >
            <Route path='/product/:id' element={<SingleProduct />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
