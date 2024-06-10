import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className="mb-2">
            {transaction.type.toUpperCase()} - {transaction.coin} - {transaction.quantity} @ ${transaction.price} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
