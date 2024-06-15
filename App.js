import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, isEditing: false }]);
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleEditTask = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleEditTask={toggleEditTask} 
      />
    </div>
  );
};

export default App;
