import PricingCard from './components/PricingCards/PricingCard'
import './global.css'
import styles from './App.module.css'


function App() {

  const cards = [
    {
      label: "Start-up",
      price: "Free",
      image: "/images/bike.png",
      imageAlt: "Moving bike with clouds",
      features: ["Unlimited Downloads","Email Support","Limited Access"]
    },
    {
      label: "Pro",
      price: "$49",
      duration: "/Year",
      image: "/images/car.png",
      imageAlt: "Moving car with clouds",
      features: ["Up to 10 Users","Email Support, Call Support","1 Year Access"]
    },
    {
      label: "Enterprise",
      price: "$99",
      image: "/images/plane.png",
      imageAlt: "Flying plane with clouds",
      features: ["Unlimited Access","On demand request","Lifetime Access"]
    }
  ]

 return (
  <main>
    <div className={styles.bg}>
      <div className={styles.info}>
      <h1 className={styles.heading}>Choose your plan</h1>
    <p className={styles.description}>
      Lorem Ipsum dolar sit amet, consecteur adipiscing elit.<br/>
      Universa enim illorum ratione cum tota vestra confligendum puto
    </p>
      </div>
      
    </div>
    
    <div className={`${styles.prices} container`}>
    
    {cards.map(card=>{
      return (
        <PricingCard label={card.label}
        price={card.price}
        duration={card.duration}
        image={card.image}
        imageAlt={card.imageAlt}
        features={card.features}
        key={card.label}/>
      )
    })}
  
  </div>
  </main>

 )
}

export default App
