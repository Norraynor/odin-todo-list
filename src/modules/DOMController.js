import { drawProject } from './drawProject';
import { drawTodoCard } from './drawTodo';
import * as drawTodoDetails from './drawTodoDetails'

let mainContainer = null;
let projects;

function setProjectContainer(projectsContainer) {
    projects = projectsContainer;
}
function getProjectContainer() {
    return projects;
}
function setTopElement(element) {
    mainContainer = element;
}
//draw everything here
function drawMainContainer() {
    const main = document.createElement('div');
    main.classList.add('main-container');
    //add project container // todo container // todo details
    main.appendChild(drawProjectContainer(getProjectContainer()));
    main.appendChild(drawTodoContainer(getProjectContainer().getCurrentProject()));
    main.appendChild(drawDetailsContainer(getProjectContainer().getCurrentProject().getCurrentTodo()))
    return main;
}

function reDraw() {    
    mainContainer.textContent = "";
    mainContainer.appendChild(drawMainContainer());
}

function drawProjectContainer(projectContainer){
    const container = document.createElement('div');
    container.classList.add('project-container');
    const newButton = document.createElement('button');
    newButton.classList.add('add-project');
    newButton.classList.add('button-3');
    newButton.textContent = '+ NEW +';
    container.appendChild(newButton);
    //add projects here
    const currentProjects = getProjectContainer().getItems();
    currentProjects.forEach((element,index) => {
        const project = drawProject(projectContainer, element, index);
        project.addEventListener('click', () => {
            //select
            getProjectContainer().selectProject(+project.getAttribute('index'));
            //trigger refresh of todos
            reDraw();
        })
        container.appendChild(project);
    });
    return container;
}

function drawTodoContainer(project) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    const newButton = document.createElement("button");
    newButton.classList.add("add-todo");
    newButton.classList.add("button-3");
    newButton.textContent = "+ ADD +";
    todoContainer.appendChild(newButton);
    const header = document.createElement('div');
    header.classList.add('todo-header');
    const hTitle = document.createElement("div");
    hTitle.classList.add("todo-title");
    hTitle.textContent = 'Title';
    const hPriority = document.createElement("div");
    hPriority.classList.add("todo-priority");
    hPriority.textContent = 'Priority';
    const hDueDate = document.createElement("div");
    hDueDate.classList.add("todo-due-date");
    hDueDate.textContent = 'Due date';
    header.appendChild(hPriority);
    header.appendChild(hTitle);
    header.appendChild(hDueDate);
    todoContainer.appendChild(header);
    //add todos here
    if (project != null) {        
        const selectedProjectItems = project?.getItems();
		selectedProjectItems.forEach((element, index) => {
			const todo = drawTodoCard(project, element, index);
			todo.addEventListener("click", () => {
				//select
				getProjectContainer()
					.getCurrentProject()
					.selectTodo(+todo.getAttribute("index"));
				//trigger refresh of todos
				reDraw();
			});
			todoContainer.appendChild(todo);
		});
    }
    return todoContainer;
}

function drawDetailsContainer(todo) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');    
    detailsContainer.appendChild(drawTodoDetails.drawTodoDetails(todo));

    return detailsContainer;
}

export { setProjectContainer, drawMainContainer, setTopElement };