import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListarCategorias from './components/categoria/listarcategorias/ListarCategorias'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/categorias' element={<ListarCategorias />} />
            <Route path='/cadastrarcategoria' element={<FormCategoria />} />
            <Route path='/editarcategoria/:id' element={<FormCategoria />} />
            <Route path='/deletarcategoria/:id' element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
