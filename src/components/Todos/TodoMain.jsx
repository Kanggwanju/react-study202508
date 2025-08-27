import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({ todos, onDelete }) => {


  return (
    <ul className={styles['todo-list']}>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />)
      }
    </ul>
  );
};

export default TodoMain;
