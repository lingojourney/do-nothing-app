// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksContainer = document.getElementById('tasks-container');

// Load tasks from LocalStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Sort tasks by ASCII
tasks.sort();

function addTask(taskText, render = true) {
    // Do not add empty tasks
    if (!taskText) return;

    tasks.push(taskText);

    // Sort tasks
    tasks.sort();

    // Store tasks in LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    if (render) {
        // Clear tasks container
        tasksContainer.innerHTML = '';

        // Render all tasks
        tasks.forEach(renderTask);
    }
}

function renderTask(taskText) {
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
        alert(`Meditating or Doing ${taskText}`);
    });
    task.appendChild(doTaskBtn);

    // Create do nothing button
    const doNothingBtn = document.createElement('button');
    doNothingBtn.textContent = 'Do Nothing';
    doNothingBtn.addEventListener('click', () => {
        alert('Meditating or Doing nothing!');
    });
    task.appendChild(doNothingBtn);

    // Create remove task button
    const removeTaskBtn = document.createElement('button');
    removeTaskBtn.textContent = 'Remove Task';
    removeTaskBtn.addEventListener('click', () => {
        removeTask(taskText);
    });
    task.appendChild(removeTaskBtn);

    // Create rename task button
    const renameTaskBtn = document.createElement('button');
    renameTaskBtn.textContent = 'Rename Task';
    renameTaskBtn.addEventListener('click', () => {
        renameTask(taskText);
    });
    task.appendChild(renameTaskBtn);

    // Add task to container
    tasksContainer.appendChild(task);
}

function removeTask(taskText) {
    const index = tasks.indexOf(taskText);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        tasksContainer.innerHTML = '';
        tasks.forEach(renderTask);
    }
}

function renameTask(oldTaskText) {
    const newTaskText = prompt(`Rename "${oldTaskText}" to:`, oldTaskText);
    const index = tasks.indexOf(oldTaskText);
    if (index !== -1 && newTaskText && newTaskText.trim() !== '') {
        tasks[index] = newTaskText.trim();
        tasks.sort();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        tasksContainer.innerHTML = '';
        tasks.forEach(renderTask);
    }
}

// Add task
addTaskBtn.addEventListener('click', () => {
    addTask(taskInput.value.trim());
    // Clear input
    taskInput.value = '';
});

// Render tasks from LocalStorage on load
tasks.forEach(renderTask);