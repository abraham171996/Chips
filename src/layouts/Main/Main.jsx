import React, { useState } from 'react'
import pepper1 from '../../assets/image/main/3-2-pepper-picture 1.png'
import styles from "./main.module.css"
import nachos from '../../assets/image/main/Group 24.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import pepper2 from '../../assets/image/main/3-2-pepper-picture 2.png'
import corn from '../../assets/image/main/Corn_PNG_Clip_Art_Image-1729370331 1 (1).png'
import fire from '../../assets/image/main/fire.png'
const ingredient = [
    {
        id: crypto.randomUUID(),
        name: "Chilli",
        image: pepper2
    },
    {
        id: crypto.randomUUID(),
        name: "Corn",
        image: corn
    },
    {
        id: crypto.randomUUID(),
        name: "Spices",
        image: fire
    }
]

const Main = () => {
   const [count ,setCount] = useState(0);

   
    
   function handlePlus(){
        setCount(count+1)
   }
   function handleMinus(){
     if(count>0){
        setCount(count-1)
     }
     
   }
   
    return (
        <main>
            <section id={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.cardLeftTop}>
                        <h1>FLAMIN HOT NACHOS</h1>
                        <img src={pepper1} alt="pepper-great" />
                    </div>
                    <p >Presenting the Classic Nachos with a Flaming Hot Twist.
                        It will Rock your taste buds with Chilli & Lime.
                    </p>
                    <div className={styles.addCart}>
                        <button className={styles.addBtn}>
                            <div className={styles.icn}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                            <span>Add TO Cart</span>
                        </button>
                        <div className={styles.countBtn}>
                            <button onClick={handlePlus}>+</button>
                            <span className={styles.countNum}>{count}</span>
                            <button onClick={handleMinus}>-</button>
                        </div>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <figure>
                        <img className={styles.nachos} src={nachos} alt="nachos" />
                    </figure>
                    <div className={styles.ingredients}>
                        <ul className={styles.ingredientsBox}>

                            {ingredient.map((e)=>(                                <IngredientItem
                                    name={e.name}
                                    image={e.image}
                                    key={e.id}
                                />
                            ))}

                        </ul>
                    </div>
                </div>
            </section>

        </main>
    )
}

function IngredientItem({ name, image }) {
    return (
       <>
             <li className={styles.box}>
            <figure className={styles.circle}>
                <img className={styles.boxImg} src={image} alt="" />
            </figure>
            <h4>{name}</h4>
        </li>
       </>
    )
}
export default Main