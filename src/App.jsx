import React from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers.jsx';
import UserList from './components/Users/UserList.jsx';

const App = () => {

  return (
    <>
      <AddUsers />
      <UserList />
    </>
  )
};

export default App;
