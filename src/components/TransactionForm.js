import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState('buy');
  const [coin, setCoin] = useState('SOL');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ type, coin, price: parseFloat(price), quantity: parseFloat(quantity), date });
    setType('buy');
    setCoin('SOL');
    setPrice('');
    setQuantity('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4">
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Coin: </label>
        <select value={coin} onChange={(e) => setCoin(e.target.value)}>
          <option value="SOL">Solana (SOL)</option>
          <option value="ETH">Ethereum (ETH)</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Price: </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label>Quantity: </label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </div>
      <div className="mb-4">
        <label>Date: </label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
