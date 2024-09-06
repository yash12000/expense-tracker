import React from 'react';

const WalletBalance = ({ balance }) => {
  return (
    <div>
      <h2>Wallet Balance: ₹{balance}</h2>
    </div>
  );
};

export default WalletBalance;
