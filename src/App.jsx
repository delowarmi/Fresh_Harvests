import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import ProductDtails from './components/pages/ProductDtails'
import Shop from './components/pages/Shop'
import About from './components/pages/About'
import Blog from './components/pages/Blog'

function App() {
 

  return (
    <>
      <div>
        <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/products/:id' element={<ProductDtails/>}/>
        </Route>
        </Routes>
    </div>
    </>
  )
}

export default App
