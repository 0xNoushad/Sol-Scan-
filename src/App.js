import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ProfitLoss from './components/ProfitLoss';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [profitLoss, setProfitLoss] = useState(0);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  useEffect(() => {
    const calculateProfitLoss = async () => {
      let totalProfitLoss = 0;
      for (let transaction of transactions) {
        const priceAtDate = await fetchPriceAtDate(transaction.coin, transaction.date);
        const profitLoss = transaction.type === 'buy'
          ? -transaction.quantity * transaction.price
          : transaction.quantity * (transaction.price - priceAtDate);
        totalProfitLoss += profitLoss;
      }
      setProfitLoss(totalProfitLoss);
    };

    calculateProfitLoss();
  }, [transactions]);

  const fetchPriceAtDate = async (coin, date) => {
    const timestamp = new Date(date).getTime() / 1000;
    let url;
    if (coin === 'SOL') {
      url = `https://api.solscan.io/market/token?date=${timestamp}&symbol=SOL`;
    } else {
      url = `https://api.etherscan.io/api?module=stats&action=ethprice&timestamp=${timestamp}`;
    }
    const response = await axios.get(url);
    return coin === 'SOL' ? response.data.price : response.data.result.ethusd;
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Profit/Loss Calculator</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <ProfitLoss profitLoss={profitLoss} />
    </div>
  );
};

export default App;
