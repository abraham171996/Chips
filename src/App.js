import React from 'react';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';
import { useState } from 'react';

import crunchex from '../src/assets/image/footer/crunchex.png';
import tomatoTwist from '../src/assets/image/footer/tomatoTwist.png';
import chaatChaska from '../src/assets/image/footer/chaatChaska.png';
import nachos from "../src/assets/image/footer/imageedit_1_4016932298.png";
import  pepper from "./assets/image/main/3-2-pepper-picture 1.png"
import tomato from './assets/image/main/tomato.png'
import pudina from './assets/image/main/pudina.png'
import potato from './assets/image/main/potato.png'
let chipsObj = [
  {   
    id: crypto.randomUUID(),
    name: "FLAMIN HOT NACHOS",
    image: nachos,
    price: 10,
    description:"Presenting the Classic Nachos with a Flaming Hot Twist. It will Rock your taste buds with Chilli & Lime.",
    desImg:pepper,
  },
  {   
    id: crypto.randomUUID(),
    name: "CRUNCHEX CHILLI",
    image: crunchex,
    price: 10,
    description:"Hand-cooked styled wafers hugely popular for being flavourful and crunchy. Enjoy the fiery side of chilli in this one.",
    desImg:potato,
  },
  {   
    id: crypto.randomUUID(),
    name: "TOMATO TWIST",
    image: tomatoTwist,
    price: 8 ,
    description:"Give in to the sweet notes of tomato.",
    desImg:tomato,
  },
  {   
    id: crypto.randomUUID(),
    name: "CHAAT CHASKA",
    image: chaatChaska,
    price: 6,
    description:"Here’s a total brat of a flavour. Known for its spicy yet tangy yet minty yet salty character.",
    desImg:pudina,
  }
];

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);
  const [product, setProduct] = useState(chipsObj[0]);
  const [addPrice,setAddPrice] = useState(0)
  const [addName,setAddName] = useState("")
  const [addPitcure,setAddPitcure] = useState(product.image)
 
  
  function productHandel(selectedProduct) {
    setProduct(selectedProduct);
    setCount(0);
  }
  

  function handleAddCart() {
    setShow(show + count);
    setCount(0);
    if(count>=1){
      setAddPrice(addPrice+(count*product.price))
      setAddName(addName+product.name)
      setAddPitcure(product.image)

    }
  }
    
  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Header
        show={show}
        product={product}
        addPrice={addPrice}
        addName = {addName}
        addPitcure = {addPitcure}
      />
     
      <Main 
        count={count} 
        onPlus={handlePlus} 
        onMinus={handleMinus} 
        onAddCart={handleAddCart}
        product = {product}
      />
      <Footer productObj={chipsObj}
            onClick={productHandel}
            product={product}/>
            
    </>
  );
};



export default App;
