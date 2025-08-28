import React, {useState} from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';
import {TODOS} from './dummy-data/DUMMY_TODOS.js';

const TodoTemplate = () => {

  // 할 일 데이터들의 묶음 배열
  const [todos, setTodos] = useState(
    TODOS
  );

  // 할 일 데이터 추가 함수
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

  // 할 일 데이터 삭제 함수
  const onDelete = (targetId) => {
    setTodos(prev => prev.filter(todo => todo.id !== targetId));
  };
  
  // 할 일 체크 함수
  const onCheck = (targetId) => {
    // id로 done의 값을 변경할 객체를 탐색한 후 논리값 반전
    setTodos(prev =>
      prev.map(todo =>
        todo.id === targetId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );

    // find
    /*const copyTodos = [...todos];
    const targetTodo = copyTodos.find(todo => todo.id === id);

    targetTodo.done = !targetTodo.done;

    setTodos(copyTodos);*/

    // 반복문
    /*const copyTodos = [...todos];
    let index = -1;
    for (let i = 0; i < copyTodos.length; i++) {
      if (copyTodos[i].id === targetId) {
        index = i;
        copyTodos[i].isChecked = !copyTodos[i].isChecked;
        break;
      }
    }

    if (index !== -1) {
      setTodos(copyTodos);
    }*/
  }
  
  return (
    <div className={styles.TodoTemplate}>
      <TodoHeader todos={todos}/>
      <TodoMain todos={todos} onDelete={onDelete} onCheck={onCheck}/>
      <TodoInput onAdd={onSave}/>
    </div>
  );
};

export default TodoTemplate;