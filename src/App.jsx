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
      const idSlice = +prev[prev.length - 1].id.slice(1) + 1;
      // console.log('g' + idSlice);
      return [...prev, {
        id: 'g' + idSlice,
        text: data
      }];
    });
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onSave={onSave}/>
      </section>
      <section id='goals'>
        <CourseList goals={goals}/>
      </section>
    </div>
  );
};

export default App;
