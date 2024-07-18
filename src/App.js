import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import './App.css';
const App = () => {
const [expenses, setExpenses] = useState([]);
const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
        };
    return (
	        <div className="App">
           <h1>Expense Tracker</h1>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
	};

export default App;
