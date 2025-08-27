import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({ onAdd }) => {

  const [inputText, setInputText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const {
    'form-wrapper': wrapper,
    'insert-form': insertForm,
    'insert-btn': insertBtn,
    open: openStyle,
  } = styles;

  // 제출 핸들러
  const submitHandler = e => {
    e.preventDefault();
    
    // 부모에게 입력된 텍스트를 파라미터로 넘겨서 함수 실행
    onAdd(inputText);
    setInputText('');
  };

  // 버튼 클릭 핸들러
  const clickHandler = e => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className={wrapper}>
        <form className={insertForm} onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='할 일을 입력 후, 엔터를 누르세요!'
            onInput={e => setInputText(e.target.value)}
            value={inputText}
          />
        </form>
      </div>
      <button
        // 동적 클래스 조작
        className={`${insertBtn} ${isClicked === true ? openStyle : ''}`}
        onClick={clickHandler}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
