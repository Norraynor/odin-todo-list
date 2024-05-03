function drawProject(project, index) {
	const container = document.createElement("div");
	container.classList.add("project");
	container.setAttribute("index", index);
	const title = document.createElement("div");
	title.classList.add("project-title");
	title.textContent = project.title;
	container.appendChild(title);    
	const removeButton = document.createElement("button");
	removeButton.classList.add("remove-todo");
	removeButton.textContent = "remove";
	if (project.getSelected()) {
		container.classList.add('selected');
	} else {
		container.classList.remove('selected');
	}
	container.appendChild(removeButton);
	return container;
}

export { drawProject };
