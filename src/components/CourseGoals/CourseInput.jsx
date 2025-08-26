import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({ onSave }) => {

  const [goalInput, setGoalInput] = useState('');
  
  // 추가 버튼 클릭 이벤트
  const addGoal = (e) => {
    e.preventDefault();

    // 상위컴포넌트(App)이 내려준 함수 onSave 내려받음
    onSave(goalInput);

    // 입력값 초기화
    setGoalInput('');
  };
  
  // 목표 입력 이벤트
  const goalChangeHandler = e => {
    setGoalInput(e.target.value);
  };

  return (
    <form>
      <div className='form-control'>
        <label>나의 목표</label>
        <input
          type='text'
          onInput={goalChangeHandler}
          value={goalInput}
        />
      </div>
      <Button type='submit' onClick={addGoal}>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
