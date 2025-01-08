import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Notfound from './components/notFound/Notfound';
import Layout from './components/layout/Layout';
import Portfolio from './components/portofolio/Portfolio';

function App() {
  const router = createBrowserRouter([
    {path:"" , element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"*",element:<Notfound/>}
    ]}
  ])

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
