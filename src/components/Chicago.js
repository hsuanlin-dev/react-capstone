import marioAdrian from '../assets/mario-adrian-a.jpg';
import restaurant from '../assets/restaurant.jpg';
import './Chicago.css';

function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a charming neighborhood bistro that serves
          simple food and classic cocktails in a lively but casual
          environment. The restaurant features a locally-sourced menu
          with daily specials.
        </p>
        <p>
          Based on family recipes passed down through generations,
          our chefs create dishes that are both traditional and
          unexpected. Come visit us and experience the taste of the
          Mediterranean.
        </p>
      </div>
      <div className="about-images">
        <img src={marioAdrian} alt="Mario and Adrian" />
        <img src={restaurant} alt="Restaurant interior" />
      </div>
    </section>
  );
}

export default Chicago;