import React from 'react'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import styles from "./header.module.css"
const Header = ({show}) => {
  return (
    <header className={styles.header}>
        <figure >
        <img className={styles.logo} src={logo} alt="logo" />
        </figure>
        <div className={styles.shop}>
        <FontAwesomeIcon className={styles.shopBag} icon={faShoppingBag}/>
        <span style={{color:"#ffffff"}}>{show}</span>
        </div>
    </header>
  )
}

export default Header