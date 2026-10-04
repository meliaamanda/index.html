const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList= document.getElementById('todo-list');
const emptyMessage = document.getElementById('empty-message');
const totalCount = document.getElementById('total-count');
const complatedCount = document.getElementById('complatedCount');

console.log('counter total (#total-count) :', totalCount)

function updateStatus() {
    const total = todoList.children.length;
    const completed = todoList.querySelectorAll('.completed').length;

    totalCount.textContent = total;
    complatedCount.textContent = completed;

    if(total == 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function createdTodoItem(taskText){
    const li = document.createElement('li');
    li.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = taskText;
    
    span.addEventListener('click', function(){
        li.classList.toggle('completed');

        updateStatus();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className= 'delete-btn';
    deleteBtn.addEventListener('click', function(){
        const textToDelete = span.textContent;

        li.remove();

        updateStatus();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    updateStatus();
}

todoForm.addEventListener('submit', function(event){
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText === '') {
        alert('silakan masukan text');
        return
    }

    createdTodoItem(taskText);
    todoInput.value = '';
    todoInput.focus();
});

updateStatus();

