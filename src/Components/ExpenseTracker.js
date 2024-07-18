import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/expenses/')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the expenses!', error);
      });
  }, []);

  const addExpense = (expense) => {
    axios.post('http://localhost:8000/api/expenses/', expense)
      .then(response => {
        setExpenses([...expenses, response.data]);
      })
      .catch(error => {
        console.error('There was an error adding the expense!', error);
      });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;