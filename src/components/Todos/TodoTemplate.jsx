import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const TodoTemplate = () => {

  // 할 일 데이터들의 묶음 배열
  const [todos, setTodos] = useState([
    {
      id: 't1',
      text: 'test1',
      isChecked: false,
    },
    {
      id: 't2',
      text: 'test2',
      isChecked: false,
    }
  ]);

  const onSave = (text) => {
    // console.log(text);
    return setTodos(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        text: text,
        isChecked: false
      }
    ])
  };

  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader/>
      <TodoMain todos={todos}/>
      <TodoInput onAdd={onSave}/>
    </div>
  );
};

export default TodoTemplate;