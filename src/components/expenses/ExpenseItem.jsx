import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = ({expense}) => {

  // expense는 props에서 가져와서 디스트럭쳐링
  
  // expense를 디스트럭쳐링
  const {title, date, price} = expense;

  // console.log(props);
  // console.log(props['title']);

  // const {title, price, date} = props;

  return (
    <div className='expense-item'>

      <ExpenseDate expenseDate={date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;