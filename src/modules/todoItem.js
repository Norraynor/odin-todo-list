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
function setComplete(todoItem, bool) {
    todoItem.complete = bool;
}
function changePriority(todoItem, priority) {
    todoItem.priority = priority;
}
function getComplete() {
    return complete;
}

export {createTodoItem,setComplete,changePriority,getComplete}