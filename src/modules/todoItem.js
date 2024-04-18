function createTodoItem(title,description,dueDate,priority) {
    let complete = false;
    return {
        title,
        description,
        dueDate,
        priority,
        complete
    }
}
function setComplete(todoItem, complete) {
    todoItem.complete = complete
}
function changePriority(todoItem, priority) {
    todoItem.priority = priority;
}

export {createTodoItem}