import React from 'react'
import Sidebar from './sidebar';
import ProductDetail from './ProductDetail.jsx'
import { useState } from 'react';
function Home() {
  const [toggle,settoggle] = useState(true)
  return (
    <> 
      
      <Sidebar toggle={toggle} settoggle ={settoggle}/>
      <ProductDetail settoggle={settoggle}/>
     
    </>
  )
}

export default Home