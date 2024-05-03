import "./style.css";
import * as projectContainer from "./modules/projectContainer";
import * as DOMController from './modules/DOMController';
function component() {
	const element = document.createElement("div");
	const container = projectContainer.createProjectContainer();
	container.addItem('defult', 'default project');
	container.addItem("defult2", "default project");
	container.selectProject(0);
	let currentProject = container.getCurrentProject();
		
	currentProject.addItem('example', 'example todo', new Date(), 1);
	currentProject.addItem("example2", "example todo", new Date(), 2);
	currentProject.selectTodo(0);
	currentProject.removeItem(0);

	container.selectProject(1);
	currentProject = container.getCurrentProject();
	currentProject.addItem("example3", "example todo", new Date(), 3);
	currentProject.addItem("example4", "example todo", new Date(), 4);
	currentProject.selectTodo(0);

	container.selectProject(0);

	console.log(container.getItems());

	// const defaultProjectDiv = document.createElement('div');
	// defaultProjectDiv.classList.add('default');
	// element.appendChild(defaultProjectDiv);

	// Lodash, currently included via a script, is required for this line to work
	//element.innerHTML = _.join(["Hello", "webpack"], " ");
	console.log('lul')
	console.log(container.getCurrentProject().getCurrentTodo())
	DOMController.setProjectContainer(container);
	element.appendChild(DOMController.drawMainContainer());
	DOMController.setTopElement(element);
	return element;
}

document.body.appendChild(component());
