import React, {useRef, useState} from 'react';

const Player = () => {

  // useRef로 태그 기억시키기
  const nameRef = useRef(null);

  const [enteredName, setEnteredName] = useState('anonymous');

  const nameChangeHandler = () => {
    setEnteredName(nameRef.current.value);
    nameRef.current.value = '';
  };

  return (
    <section id='player'>
      <h2>Welcome {enteredName}!</h2>
      <p>
        <input
          type='text'
          ref={nameRef}
        />
        <button onClick={nameChangeHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
