import * as todoItem from './todoItem';

function createProjectItem(title, description) {
    let todoItems = [];
    let complete = false;
    let selected = false;
    let currentTodo = todoItems[0] !=null ? todoItems[0] : null;

    function addItem(title, description, dueDate, priority) {
        let item = todoItem.createTodoItem(title, description, dueDate, priority);
        todoItems.push(item);
    }
    function removeItem(index) {
        todoItems.splice(index, 1);
        currentTodo = todoItems[0] != null ? todoItems[0] : null;
        currentTodo.setSelected(true);
    }
    function getItems() {
        return todoItems
    }
    function changeItemPriority(index, priority) {
        todoItem.changePriority(todoItems[index], priority);
    }
    function selectTodo(index) {
        deselectTodo();
        currentTodo = todoItems[index];
		currentTodo.setSelected(true);
    }
    function deselectTodo() {
        todoItems.forEach((element) => {
            element.setSelected(false);
        });
    }
    function getCurrentTodo() {
        return currentTodo;
    }
    function getSelected() {
        return selected;
    }
    function setSelected(select) {
        selected = select;
    }
    function setItemComplete(index, bool) {
        todoItem.setComplete(todoItems[index], bool);
        if (checkProjectComplete()) {
            complete = true;
        }
    }
    function checkProjectComplete() {
        let projectItems = todoItems.filter((item) => {
            return !item.getComplete();
        })
        if (projectItems.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    return {
			title,
			description,
			addItem,
			removeItem,
			getItems,
			changeItemPriority,
			setItemComplete,
			selectTodo,
			getCurrentTodo,
            setSelected,
            getSelected,
		};
}

export { createProjectItem };
