import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Fonction pour ajouter une tâche
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Fonction pour marquer une tâche comme terminée
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Fonction pour modifier une tâche
  const editTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span>{task.text}</span>
            <button onClick={() => toggleCompletion(index)}>
              {task.completed ? 'Non fini' : 'Fini'}
            </button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
            <button onClick={() => {
              const newText = prompt("Modifier la tâche:", task.text);
              if (newText) editTask(index, newText);
            }}>Modifier</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;