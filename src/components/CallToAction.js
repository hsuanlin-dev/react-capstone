import { Link } from 'react-router-dom';
import restaurantFood from '../assets/restaurant-food.jpg';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link to="/booking" className="hero-btn">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Restaurant food" />
      </div>
    </section>
  );
}

export default CallToAction;