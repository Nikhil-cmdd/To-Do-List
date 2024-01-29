function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="markTaskAsCompleted(this)">Mark as Completed</button>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(taskContainer);
    taskInput.value = '';
}

function markTaskAsCompleted(button) {
    const taskContainer = button.parentElement;
    taskContainer.style.backgroundColor = '#ddd';
    taskContainer.querySelector('button:nth-child(2)').disabled = true;
}

function removeTask(button) {
    const taskContainer = button.parentElement;
    taskContainer.parentElement.removeChild(taskContainer);
}