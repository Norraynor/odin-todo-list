import "./style.css";
import { createProjectItem } from "./modules/projectItem";
import { createTodoItem } from "./modules/todoItem";
import { createProjectContainer } from "./modules/projectContainer";
function component() {
	const element = document.createElement("div");
	const projectContainer = createProjectContainer();
	const defaultProject = createProjectItem('default', 'default todo project');
	projectContainer.addItem(defaultProject);
	projectContainer.selectProject(0);
	projectContainer
		.getCurrentProject()
		.addItem(
			createTodoItem(
				"Create project",
				"test to see if project is created",
				new Date(),
				1
			)
		);
	//defaultProject.addItem(createTodoItem('Create project', 'test to see if project is created', new Date(), 1))
	console.log(projectContainer.getCurrentProject().getItems());
	const defaultProjectDiv = document.createElement('div');
	defaultProjectDiv.classList.add('default');
	element.appendChild(defaultProjectDiv);
	// Lodash, currently included via a script, is required for this line to work
	//element.innerHTML = _.join(["Hello", "webpack"], " ");
    console.log('lul')
	return element;
}

document.body.appendChild(component());
