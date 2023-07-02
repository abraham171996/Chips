

import styles from "./main.module.css"

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

const Main = ({count,onPlus,onMinus,onAddCart,product}) => {
   
   
    return (
        <main>
            {
                product&&
                <section id={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.cardLeftTop}>
                        <h1>{product.name}</h1>
                        <img src={product.desImg} alt="" />
                    </div>
                    <p >
                        {product.description}
                    </p>
                    <div className={styles.addCart}>
                        <button className={styles.addBtn} onClick={onAddCart}>
                            <div className={styles.icn}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                            <span>Add TO Cart</span>
                        </button>
                        <div className={styles.countBtn}>
                            <button onClick={onPlus}>+</button>
                            <span className={styles.countNum}>{count}</span>
                            <button onClick={onMinus}>-</button>
                        </div>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <figure>
                        <img className={styles.nachos} src={product.image} alt="nachos" />
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
            }
                     
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