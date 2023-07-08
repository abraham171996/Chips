import React from 'react'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import styles from "./header.module.css"
import ShopCart from '../../components/ShopCart'
const Header = ({show,product,addPrice,addName,addPitcure}) => {
  let shopArr = [[show,addPrice,addName,addPitcure]]
  return (
    <header className={styles.header}>
        <figure >
        <img className={styles.logo} src={logo} alt="logo" />
        </figure>
        <div className={styles.shop}>
        <FontAwesomeIcon className={styles.shopBag} icon={faShoppingBag}/>
          
        </div>
        <ul className={styles.shopCard}>
          {
            shopArr.map((e)=>(
             <ShopCart
             key={crypto.randomUUID()}
            
             count = {e[0]}
             price = {e[1] + '$'}
             name = {e[2]}
             pitcure = {e[3]}
             />
            ))
          }
        </ul>
    </header>
  )
}

export default Header