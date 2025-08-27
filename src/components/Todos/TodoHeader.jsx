import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({ todos }) => {

  // 오늘 날짜를 YYYY년 MM월 DD일 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate());
    return `${year}년 ${month}월 ${day}일`;
  };

  // 오늘의 요일을 한글로 가져오는 함수
  const getTodayDay = () => {
    const day = new Date().getDay();
    let mappingDay = '';
    switch (day) {
      case 0:
        mappingDay = '일';
        break;
      case 1:
        mappingDay = '월';
        break;
      case 2:
        mappingDay = '화';
        break;
      case 3:
        mappingDay = '수';
        break;
      case 4:
        mappingDay = '목';
        break;
      case 5:
        mappingDay = '금';
        break;
      case 6:
        mappingDay = '토';
        break;
    }
    return mappingDay;
  };

  const getRemainingDo = () => todos.filter(todo => todo.isChecked === false).length;

  const { day, 'tasks-left': left } = styles;

  return (
    <header>
      <h1>{getTodayDate()}</h1>
      <div className={day}>{getTodayDay()}요일</div>
      <div className={left}>할 일 {getRemainingDo()}개 남음</div>
    </header>
  );
};

export default TodoHeader;