import React from 'react';
import Greek from '../assets/greek salad.jpg';
import bruchetta from '../assets/Bruschetta-RCSQ.jpg';
import lemon from '../assets/lemon dessert.jpg';
import './Specials.css'; // Import CSS here

const Specials = () => {
  const specials = [
    {
      img: Greek,
      title: 'Greek Salad',
      price: '$12.99',
      description:
        'The famous Greek salad with crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with garlic and rosemary croutons.',
    },
    {
      img: bruchetta,
      title: 'Bruschetta',
      price: '$5.99',
      description:
        'Grilled bread smeared with garlic and topped with seasoned tomatoes, olive oil, and balsamic vinegar.',
    },
    {
      img: lemon,
      title: 'Lemon Dessert',
      price: '$5.00',
      description:
        'A refreshing lemon dessert made with fresh cream, zesty lemons, and a crunchy biscuit base.',
    },
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.img} alt={item.title} className="special-image" />
            <div className="special-info">
              <div className="special-title-price">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="special-description">{item.description}</p>
              <button className="order-button">Order Delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;
