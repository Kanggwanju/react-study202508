import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({ todo, onDelete, onCheck }) => {

  const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

  const deleteClickHandler = e => {
    onDelete(todo.id);
  };

  const checkClickHandler = e => {
    onCheck(todo.id);
  };

  return (
    <li className={itemStyle}>
      <div className={`${checkCircle} ${todo.isChecked ? styles.active : ''}`} onClick={checkClickHandler}>
        { todo.isChecked ? <MdDone /> : '' }
      </div>
      <span className={`${text} ${todo.isChecked ? styles.finish : ''}`}>{todo.text}</span>
      <div
        className={remove}
        onClick={deleteClickHandler}
      >
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
