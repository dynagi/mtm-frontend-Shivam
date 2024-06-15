import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleEditTask }) => {
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newText);
  };

  return (
    <li>
      {task.isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => toggleEditTask(task.id)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => toggleEditTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
