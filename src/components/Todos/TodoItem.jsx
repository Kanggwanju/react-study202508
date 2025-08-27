import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({ todo, onDelete }) => {

  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  const clickHandler = (e) => {
    onDelete(todo.id);
  };

  return (
    <li className={itemStyle}>
      <div className={checkCircle}>
        <MdDone />
      </div>
      <span className={text}>{todo.text}</span>
      <div
        className={remove}
        onClick={clickHandler}
      >
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
