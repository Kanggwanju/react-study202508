import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ goal, onDelete }) => {

  // console.log('styles: ', styles);
  const {'goal-item': goalItem} = styles;
  const handleClick = (e) => {
    // console.log(e.target.id);
    onDelete(goal.id);
  };

  return <li className={goalItem} onClick={handleClick}>{goal.text}</li>;
};

export default CourseItem;
