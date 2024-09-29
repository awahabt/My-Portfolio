import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home, About, Github, Contact, Blog} from './pages/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <><Route path='/' element={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="github" element={<Github/>}/>
    <Route path="blog" element={<Blog/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Route>
  <Route path='/' element={<Contact/>}/>
  </>
    
  )
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
