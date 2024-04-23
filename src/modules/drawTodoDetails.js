function drawTodoDetails() {
	const container = document.createElement("div");
	container.classList.add("details");
	const title = document.createElement("div");
	title.classList.add("details-title");
	const dueDate = document.createElement("div");
	dueDate.classList.add("details-date");
	const priority = document.createElement("div");
    priority.classList.add("details-priority");
    const description = document.createElement('div');
    description.classList.add('details-description');
	container.appendChild(priority);
	container.appendChild(title);
    container.appendChild(dueDate);
    container.appendChild(description);

	return container;
}

export { drawTodoDetails };
