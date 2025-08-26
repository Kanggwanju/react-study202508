import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../ui/Card.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';

const ExpenseList = ({ expenses: expenseList }) => {

  /*
      ExpenseFilter에서 선택한 연도 값을
      이 컴포넌트 ExpenseList로 끌어올려서 콘솔에 출력해보세요
   */


  const onAddFilter = (year) => {
    console.log('gggg');
    console.log(year);
  };

  return (
    <Card className='expenses'>
      <ExpenseFilter onSave={onAddFilter}/>
      <ExpenseItem expense={expenseList[0]}/>
      <ExpenseItem expense={expenseList[1]}/>
      <ExpenseItem expense={expenseList[2]}/>
    </Card>
  );
};

export default ExpenseList;