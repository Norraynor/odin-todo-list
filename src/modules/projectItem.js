import * as todoItem from './todoItem';

function createProjectItem(title, description) {
    let todoItems = [];
    let complete = false;

    function addItem(title, description, dueDate, priority) {
        let item = todoItem.createTodoItem(title, description, dueDate, priority);
        todoItems.push(item);
    }
    function getItems() {
        return todoItems
    }
    function changeItemPriority(index, priority) {
        todoItem.changePriority(todoItems[index], priority);
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
			getItems,
			changeItemPriority,
			setItemComplete,
            
		};
}

export { createProjectItem };
