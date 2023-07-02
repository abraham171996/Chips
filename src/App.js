import React from 'react';
import Header from './layouts/Header/Header';
import Main from './layouts/Main/Main';
import Footer from './layouts/Footer/Footer';
import { useState } from 'react';
import FooterItem from './components/FooterItem';
import crunchex from '../src/assets/image/footer/crunchex.png';
import tomatoTwist from '../src/assets/image/footer/tomatoTwist.png';
import chaatChaska from '../src/assets/image/footer/chaatChaska.png';
import nachos from "../src/assets/image/footer/imageedit_1_4016932298.png";

let chipsObj = [
  {   
    id: crypto.randomUUID(),
    name: "FLAMIN HOT NACHOS",
    image: nachos,
    price: 10
  },
  {   
    id: crypto.randomUUID(),
    name: "CRUNCHEX CHILLI",
    image: crunchex,
    price: 10
  },
  {   
    id: crypto.randomUUID(),
    name: "TOMATO TWIST",
    image: tomatoTwist,
    price: 8 
  },
  {   
    id: crypto.randomUUID(),
    name: "CHAAT CHASKA",
    image: chaatChaska,
    price: 6
  }
];

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(0);
  const [product, setProduct] = useState(null);

  function productHandel(name, image, price) {
    setProduct(() => {
      return (
        <>
          {name}
          {image}
          {price}
        </>
      );
    });
  }

  function handleAddCart() {
    setShow(show + count);
    setCount(0);
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
      <Header show={show} />
      <Main 
        count={count} 
        onPlus={handlePlus} 
        onMinus={handleMinus} 
        onAddCart={handleAddCart}
        product = {product}
      />
      <Footer>
        {chipsObj.map((el) => (
          <FooterItem 
            name={el.name}
            image={el.image}
            key={el.id}
            price={el.price}
            onClick={productHandel}
          />
        ))}
      </Footer>
    </>
  );
};



export default App;
