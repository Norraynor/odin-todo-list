function drawTodoCard(todo,index) {
    const container = document.createElement('div');
    container.classList.add('todo');
    container.setAttribute('index',index)
    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = todo.title;
    const priority = document.createElement("div");
    priority.classList.add("todo-priority");
    priority.textContent = todo.priority;
    const dueDate = document.createElement('div');
    dueDate.classList.add('todo-date');
    dueDate.textContent = todo.dueDate;
    container.appendChild(priority);
    container.appendChild(title);
    container.appendChild(dueDate);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-todo');
    removeButton.textContent = 'remove';
    container.appendChild(removeButton);

    return container;
}

export {drawTodoCard}