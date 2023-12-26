/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Button from '../Button/Button'
import styles from './PricingCard.module.css'

function PricingCard( {
    label, 
    price,
    duration="", 
    image,
    imageAlt,
    features
})
{

    const themeClasses = {
        "Start-up": styles["card--startup"],
        "Pro": styles["card--pro"],
        "Enterprise": styles["card--enterprise"]
    }   
    const themeClass = themeClasses[label]

    return (
        <div className={`${styles.card} ${themeClass}`}>
            <div className={`${styles.card__wrapper} center-vertical`}>
            <span className={styles.card__label}>{label}</span>
            <div className={styles.card__image}>
                <img src={image} alt={imageAlt} />
            </div>
            <div className={styles["card__price-label"]} >
               <span className={styles["card__price-figure"]}>{price}</span>
               <span className={styles["card__price-duration"]}>{duration}</span> 
                
            </div>
           
            <span className={styles["card__features-label"]}> Everything in Free, Plus</span>
            <ul className={styles.card__features}>
            {features.map(feature => {
                    return (<li key={feature} className={`${styles.card__feature} center-horizontal` }>
                    <img className={styles["card__feature-icon"]} src='./icons/check.png' alt=''/>  {feature}
                    </li>)
                  })}
                

            </ul>

           <Button className={styles.card__button}> 
            Choose
           </Button>
            </div>

        </div>
    )
}



export default PricingCard