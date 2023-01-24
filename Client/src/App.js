import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home/Home'
import CreateProduct from './components/Create/CreateProduct'
import ProductList from './components/List/ProductList'
import Admin from './components/Admin/Admin'
import Edit from './components/Edit/Edit'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return <>
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<CreateProduct/>}/>
      <Route path='/list' element={<ProductList/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/update/:id' element={<Edit/>}/>
    </Routes>
  </Router>
  </>
}

export default App
