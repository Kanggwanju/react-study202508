import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ goals: goalList }) => {

  return (
    <ul className='goal-list'>
      {
        goalList.map(g => <CourseItem key={g.id} goal={g} />)
      }
    </ul>
  );
};

export default CourseList;
