import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
// import React, { useState } from 'react'
import styles from "../layouts/Footer/footer.module.css"
 
 function FooterItem({name,image,price,description,desImg,onClick}){
    // const [product,setProduct] = useState(null)
    
    // function productHandel (){
        
    //     setProduct(()=>{
    //         return(
    //             <>
    //             {chipsObj.forEach(e=>console.log(e))}
    //             </>
    //         )
    //     })
        
    // }
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
                        <button onClick={()=>onClick({ name, image, price ,description,desImg})} >ORDER NOW</button>
                       </div>
                       </div>
            </li>
           
          </div>
      )
  }

  export default FooterItem