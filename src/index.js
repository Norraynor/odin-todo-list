import "./style.css";
import * as projectContainer from "./modules/projectContainer";

function component() {
	const element = document.createElement("div");
	const container = projectContainer.createProjectContainer();
	container.addItem('defult', 'default project');
	container.selectProject(0);
	let currentProject = container.getCurrentProject();
		
	currentProject.addItem('example', 'example todo', new Date(), 1);

	console.log(container.getItems());

	// const defaultProjectDiv = document.createElement('div');
	// defaultProjectDiv.classList.add('default');
	// element.appendChild(defaultProjectDiv);

	// Lodash, currently included via a script, is required for this line to work
	//element.innerHTML = _.join(["Hello", "webpack"], " ");
    console.log('lul')
	return element;
}

document.body.appendChild(component());
