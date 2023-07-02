
import FooterItem from '../../components/FooterItem'
import styles from './footer.module.css'



const Footer = ({productObj,onClick,product}) => {
    return (
        <footer>
            <div className={styles.bg}>
                <ul className={styles.bgCards} >
                    {productObj.map((el) => (
                       
                        <FooterItem
                        name={el.name}
                        image={el.image}
                        key={el.id}
                        price={el.price}
                        description={el.description}
                        desImg={el.desImg}
                        onClick={()=>onClick(el)}
                            
                        />
                    ))}
                </ul>
            </div>
            
        </footer>
    )
}





export default Footer