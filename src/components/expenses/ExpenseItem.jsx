import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = ({expense}) => {

  // expense는 props에서 가져와서 디스트럭쳐링
  
  // expense를 디스트럭쳐링
  const {title, date, price} = expense;

  // 이벤트 핸들러
  const clickHandler = e => {
    alert('click!!');
  };

  return (
    <div className='expense-item'>

      <ExpenseDate expenseDate={date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{price}원</div>
      </div>

      <button id='btn1' onClick={clickHandler}>버튼1</button>
      <button id='btn1' onDoubleClick={e => alert('더블클릭!')}>버튼2</button>
    </div>
  );
};

export default ExpenseItem;