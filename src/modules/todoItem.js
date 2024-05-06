function createTodoItem(title,description,dueDate,priority) {
    let complete = false;
    let selected = false;

    function getSelected() {
        return selected;
    }
    function setSelected(bool) {
        selected = bool;
    }

    return {
        title,
        description,
        dueDate,
        priority,
        complete,
        getSelected,
        setSelected,
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