import './App.css'
import { Header } from './components/Header/Header'
import { MainComponent } from './components/MainComponent/MainComponent'
import { Footer } from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './components/Pages/About'
import { Shop } from './components/Pages/Shop'
import { Contact } from './components/Pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainComponent />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
