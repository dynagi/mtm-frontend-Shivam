import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask, toggleEditTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          updateTask={updateTask} 
          deleteTask={deleteTask} 
          toggleEditTask={toggleEditTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
