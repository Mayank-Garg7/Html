const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeCompletedBtn = document.getElementById('removeCompletedBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'taskItem';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteTaskBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        const deleteTaskBtn = taskItem.querySelector('.deleteTaskBtn');
        deleteTaskBtn.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });
    }
});

removeCompletedBtn.addEventListener('click', function () {
    const completedTasks = document.querySelectorAll('.taskItem');
    completedTasks.forEach(function (taskItem) {
        taskList.removeChild(taskItem);
    });
});