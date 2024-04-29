import { drawProject } from './drawProject';
import { drawTodoCard } from './drawTodo';
import * as drawTodoDetails from './drawTodoDetails'

const mainContainer = document.querySelector('.container');
let projects;

function setProjectContainer(projectsContainer) {
    projects = projectsContainer;
}
function getProjectContainer() {
    return projects;
}
//draw everything here
function drawMainContainer() {
    const main = document.createElement('div');
    main.classList.add('main-container');
    //add project container // todo container // todo details
    main.appendChild(drawProjectContainer());
    main.appendChild(drawTodoContainer(getProjectContainer().getCurrentProject()));
    main.appendChild(drawDetailsContainer(getProjectContainer().getCurrentProject().getCurrentTodo()))
    return main;
}

function drawProjectContainer(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    const newButton = document.createElement('button');
    newButton.classList.add('add-project');
    newButton.classList.add('button-3');
    newButton.textContent = '+ NEW +';
    projectContainer.appendChild(newButton);
    //add projects here
    const currentProjects = getProjectContainer().getItems();
    currentProjects.forEach((element,index) => {
        const project = drawProject(element,index)
        projectContainer.appendChild(project);
    });
    return projectContainer;
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
    const selectedProjectItems = project.getItems();
    selectedProjectItems.forEach((element,index) => {
        const todo = drawTodoCard(element,index);
        todoContainer.appendChild(todo);
    })
    return todoContainer;
}

function drawDetailsContainer(todo) {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    detailsContainer.appendChild(drawTodoDetails.drawTodoDetails(todo));

    return detailsContainer;
}

export {setProjectContainer,drawMainContainer}