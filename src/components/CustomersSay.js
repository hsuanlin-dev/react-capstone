import './CustomersSay.css';

const reviewsData = [
  {
    id: 1,
    name: 'Maria',
    rating: '⭐⭐⭐⭐⭐',
    review: 'The food was absolutely wonderful, from preparation to presentation, very pleasing.',
    image: '👩',
  },
  {
    id: 2,
    name: 'James',
    rating: '⭐⭐⭐⭐⭐',
    review: 'I love the atmosphere and the friendly staff. Will definitely come back!',
    image: '👨',
  },
  {
    id: 3,
    name: 'Sarah',
    rating: '⭐⭐⭐⭐',
    review: 'Great Mediterranean food with a modern twist. Highly recommend the Greek Salad.',
    image: '👩‍🦰',
  },
  {
    id: 4,
    name: 'Carlos',
    rating: '⭐⭐⭐⭐⭐',
    review: 'Best lemon dessert I have ever had! The recipe is truly authentic.',
    image: '👨‍🦱',
  },
];

function CustomersSay() {
    return (
        <section className="testimonials">
            <h2>What our customers say!</h2>
            <div className="testimonials-cards">
                {reviewsData.map((review) => (
                    <div className="testimonial-card" key={review.id}>
                        <p className="testimonial-rating">{review.rating}</p>
                        <div className="testimonial-user">
                            <span className="testimonial-avatar">{review.image}</span>
                            <h3>{review.name}</h3>
                        </div>
                        <p className="testimonial-review">{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CustomersSay