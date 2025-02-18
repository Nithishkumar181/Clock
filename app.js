const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');


addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; 

    const li = document.createElement('li');
    li.classList.add('task-item');

 
    const textNode = document.createTextNode(taskText);
    const span = document.createElement('span');
    span.appendChild(textNode);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
});


