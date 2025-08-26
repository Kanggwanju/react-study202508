import React from 'react';
import './CourseItem.css';

const CourseItem = ({ goal, onDelete }) => {

  const handleClick = (e) => {
    // console.log(e.target.id);
    onDelete(e.target.id);
  };

  return <li className='goal-item' id={goal.id} onClick={handleClick}>${goal.text}</li>;
};

export default CourseItem;
