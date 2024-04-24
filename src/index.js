import "./style.css";
import * as projectContainer from "./modules/projectContainer";
import * as DOMController from './modules/DOMController';
function component() {
	const element = document.createElement("div");
	const container = projectContainer.createProjectContainer();
	container.addItem('defult', 'default project');
	container.selectProject(0);
	let currentProject = container.getCurrentProject();
		
	currentProject.addItem('example', 'example todo', new Date(), 1);
	currentProject.selectTodo(0)

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
	return element;
}

document.body.appendChild(component());
