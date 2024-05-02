import React from 'react';
import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import { MyAppProvider } from './context/TaskContext';

function App() {
  return (
    <MyAppProvider>
      <div className='main'>
        <TaskList />
      </div>
    </MyAppProvider>
  );
}

export default App;
