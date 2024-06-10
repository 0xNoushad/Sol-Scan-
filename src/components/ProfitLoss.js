import React from 'react';

const ProfitLoss = ({ profitLoss }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Total Profit/Loss</h2>
      <p className={`text-${profitLoss >= 0 ? 'green' : 'red'}-500`}>${profitLoss.toFixed(2)}</p>
    </div>
  );
};

export default ProfitLoss;
