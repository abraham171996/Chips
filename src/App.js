import React from 'react'
import Header from './layouts/Header/Header'
import Main from './layouts/Main/Main'
import Footer from './layouts/Footer/Footer'
import { useState } from 'react'
const App = () => {
  const [count ,setCount] = useState(0);
  const [show,setShow] = useState(0)

   function handleAddCart(){
    setShow(show + count)
    setCount(0)
   }
    
   function handlePlus(){
        setCount(count+1)
   }
   function handleMinus(){
     if(count>0){
        setCount(count-1)
     }
     
   }
  return (
    <>
    <Header show= {show}/>
    <Main count={count} onPlus = {handlePlus} onMinus={handleMinus} onAddCart = {handleAddCart}/>
    <Footer/>
    </>
  )
}

export default App
