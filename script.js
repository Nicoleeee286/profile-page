document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span class="task-text">${text}</span>
            <button class="remove-btn">Remove</button>
        `;
        taskList.appendChild(li);

        const checkbox = li.querySelector('.checkbox');
        const removeBtn = li.querySelector('.remove-btn');

        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
