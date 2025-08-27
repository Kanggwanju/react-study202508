import React, {useState} from 'react';
import CourseInput from './components/CourseGoals/CourseInput.jsx';
import CourseList from './components/CourseGoals/CourseList.jsx';
import './App.css';

const App = () => {

  // 목표데이터들의 묶음배열
  const [goals, setGoals] = useState([
    {
      id: 'g1',
      text: '테스트 데이터1',
    },
    {
      id: 'g2',
      text: '테스트 데이터2',
    },
  ]);

  const onSave = (data) => {
    setGoals(prev => {
      const id = Math.random().toString();
      // console.log('g' + idSlice);
      return [...prev, {
        id: id,
        text: data
      }];
    });
  }

  const onDelete = (targetId) => {
    setGoals(prev => prev.filter(goal => goal.id !== targetId));

    // targetId에 해당하는 객체를 배열안에서 탐색한 후 제거
    /*const copyGoals = [...goals];
    let index = -1;
    for (let i = 0; i < copyGoals.length; i++) {
      if (copyGoals[i].id === targetId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      copyGoals.splice(index, 1);
      setGoals(copyGoals);
    }*/
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onSave={onSave}/>
      </section>
      <section id='goals'>
        <CourseList goals={goals} onDelete={onDelete}/>
      </section>
    </div>
  );
};

export default App;
