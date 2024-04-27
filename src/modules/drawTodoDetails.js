function drawTodoDetails(todo) {
	const container = document.createElement("div");
	container.classList.add("details");
	const title = document.createElement("div");
	title.classList.add("details-title");
	title.textContent = todo.title;
	const dueDate = document.createElement("div");
	dueDate.classList.add("details-date");
	dueDate.textContent = todo.dueDate;
	const priority = document.createElement("div");
	priority.classList.add("details-priority");
	priority.textContent = todo.priority;
    const description = document.createElement('div');
	description.classList.add('details-description');
	description.textContent = todo.description;
	const titleContainer = document.createElement('div');
	titleContainer.classList.add('details-header')
	titleContainer.appendChild(title);
	titleContainer.appendChild(priority);
	titleContainer.appendChild(dueDate);
	container.appendChild(titleContainer);
    container.appendChild(description);

	return container;
}

export { drawTodoDetails };
