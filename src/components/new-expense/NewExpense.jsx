import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

  const formComponent = <ExpenseForm onAdd={onSave} />;
  const buttonComponent = <button>새로운 지출 추가하기</button>;

  return (
    <div className='new-expense'>
      { formComponent }
    </div>
  );
};

export default NewExpense;