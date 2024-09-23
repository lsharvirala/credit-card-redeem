// src/components/Dashboard.js
import React, { useState } from 'react';
import RegisterCard from './RegisterCard';
import RedeemPoints from './RedeemPoints';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [points, setPoints] = useState(0);

  const addCard = (card) => {
    setCards([...cards, card]);
    setPoints(points + 1000); // Assume each card adds 1000 points
  };

  return (
    <div>
      <h1>Credit Card Points Dashboard</h1>
      <RegisterCard addCard={addCard} />
      <RedeemPoints points={points} />
      <h2>Registered Cards</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>{card.cardHolder} - {card.cardNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
