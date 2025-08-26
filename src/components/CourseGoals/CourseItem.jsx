import React from 'react';
import './CourseItem.css';

const CourseItem = ({ goal }) => {

  const {text} = goal;

  return <li className='goal-item'>${text}</li>;
};

export default CourseItem;
