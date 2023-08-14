// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksContainer = document.getElementById('tasks-container');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  // Check input is not empty
  if (taskText) {
    // Create task div
    const task = document.createElement('div');
    task.classList.add('task');

    // Create task content
    const content = document.createElement('p');
    content.textContent = taskText;
    task.appendChild(content);

    // Create do task button
    const doTaskBtn = document.createElement('button');
    doTaskBtn.textContent = 'Do Task';
    doTaskBtn.addEventListener('click', () => {
      alert(`Doing ${taskText}`);
    });
    task.appendChild(doTaskBtn);

    // Create do nothing button
    const doNothingBtn = document.createElement('button');
    doNothingBtn.textContent = 'Do Nothing';
    doNothingBtn.addEventListener('click', () => {
      alert('Doing nothing!');
    });
    task.appendChild(doNothingBtn);

    // Create remove task button
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.textContent = 'Remove Task';
    removeTaskBtn.addEventListener('click', () => {
      tasksContainer.removeChild(task);
    });
    task.appendChild(removeTaskBtn);
    
    // Add task to container
    tasksContainer.appendChild(task);
    
    // Clear input
    taskInput.value = '';
  }
});