// src/components/RedeemPoints.js
import React from 'react';

const RedeemPoints = ({ points }) => {
  return (
    <div>
      <h2>Redeem Points</h2>
      <p>Total Points: {points}</p>
            <li><a href="https://www.amazon.com">Shop</a></li>
            <li><a href="https://www.tripadvisor.com">Travel</a></li>
            <li><a href="https://www.phonepe.com/">Cashback</a></li>
    </div>
    

  );
};

export default RedeemPoints;
