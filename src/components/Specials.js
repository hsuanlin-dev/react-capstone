import greekSalad from '../assets/greek-salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon-dessert.jpg'
// import './Specials.css'


const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: greekSalad,
  },
  {
    id: 2,
    title: 'Bruchetta',
    price: '$5.99',
    description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: bruchetta,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: lemonDessert,
  },
];


function Speacials () {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>Specials</h2>
                <button className="specials-btn">Online Menu</button>
            </div>
            <div className="specials-card">
                {specialsData.map((item) => (
                    <div className="special-card" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="special-card-content">
                        <div className="special-card-title">
                            <h3>{item.title}</h3>
                            <span className="highlight-text">{item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <p className="special-card-order">Order a delivery 🛵</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Speacials