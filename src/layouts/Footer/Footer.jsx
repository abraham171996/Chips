import React from 'react'
import styles from './footer.module.css'
import crunchex from '../../assets/image/footer/crunchex.png'
import tomatoTwist from '../../assets/image/footer/tomatoTwist.png'
import chaatChaska from '../../assets/image/footer/chaatChaska.png'
import nachos from "../../assets/image/footer/imageedit_1_4016932298.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
let chipsObj = [
    {   
        id:crypto.randomUUID(),
        name :"FLAMIN HOT NACHOS",
        image:nachos,
        price:10
        
    },
    {   
        id:crypto.randomUUID(),
        name :"CRUNCHEX CHILLI",
        image:crunchex,
        price:10
        
    },
    {   
        id:crypto.randomUUID(),
        name :"TOMATO TWIST",
        image:tomatoTwist,
        price:8 
        
    },
    {   
        id:crypto.randomUUID(),
        name :"CHAAT CHASKA",
        image:chaatChaska,
        price:6
        
    }
]
const Footer = () => {
    return (
      <footer>
          <div className={styles.bg}>
             <ul className={styles.bgCards} >
              {
                  chipsObj.map((el)=>(
                      <FooterItem 
                      name = {el.name}
                      image = {el.image}
                      key={el.id}
                      price= {el.price}
                      />
                  ))
              }
              </ul> 
          </div>
      </footer>
    )
  }
  
  
  function FooterItem({name,image,price}){
    const starCount = 5; 
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
      }
      return stars;
    };
      return(
          <div>
            <li className={styles.bgCard}>
             <div className={styles.info}>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                       <div className={styles.content}>
                       <h3>{name}</h3>
                        <div className={styles.review}>
                            
                            {renderStars()}
                            <span>{price}</span>
                        </div>
                        <button>ORDER NOW</button>
                       </div>
                       </div>
            </li>
          </div>
      )
  }
  

export default Footer