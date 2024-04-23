function drawTodoCard() {
    const container = document.createElement('div');
    container.classList.add('todo');
    const title = document.createElement('div');
    title.classList.add('todo-title');
    const dueDate = document.createElement('div');
    dueDate.classList.add('todo-date');
    container.appendChild(title);
    container.appendChild(dueDate);

    return container;
}

export {drawTodoCard}