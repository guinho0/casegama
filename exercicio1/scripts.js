document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', removeTask);

        taskItem.appendChild(removeBtn);
        taskItem.addEventListener('click', toggleComplete);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function toggleComplete(event) {
        if (event.target.tagName === 'BUTTON') return;
        event.target.classList.toggle('completed');
    }

    function removeTask(event) {
        const taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
    }
});
