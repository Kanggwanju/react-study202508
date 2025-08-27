import React from 'react';
import './CourseItem.css';

const CourseItem = ({ goal, onDelete }) => {

  const handleClick = (e) => {
    // console.log(e.target.id);
    onDelete(goal.id);
  };

  return <li className='goal-item' onClick={handleClick}>${goal.text}</li>;
};

export default CourseItem;
