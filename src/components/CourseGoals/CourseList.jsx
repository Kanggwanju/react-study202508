import React from 'react';
import styles from './CourseList.module.css';
import CourseItem from './CourseItem';

const CourseList = ({ goals: goalList, onDelete }) => {

  // console.log('styles: ', styles);

  return (
    <ul className={styles["goal-list"]}>
      {
        goalList.map(g => <CourseItem key={g.id} goal={g} onDelete={onDelete} />)
      }
    </ul>
  );
};

export default CourseList;
