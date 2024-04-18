function createProjectItem(title, description) {
    let todoItems = [];

    function addItem(todoItem) {
        todoItems.push(todoItem);
    }
    function getItems() {
        return todoItems
    }
    return {
		title,
        description,
        addItem,
        getItems,
	};
}

export { createProjectItem };
