import React from "react";

const WalletBalance = ({ balance }) => (
  <div className="wallet">
    <h3>Wallet Balance: ₹{balance}</h3>
    <button className="add-income-btn">+ Add Income</button>
  </div>
);

export default WalletBalance;
