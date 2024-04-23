import * as drawTodoDetails from './drawTodoDetails'

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
    return main;
}

function drawProjectContainer(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    //add projects here
    const currentProjects = getProjectContainer().getItems()
    currentProjects.forEach(element => {
        const project = document.createElement('div');
        project.classList.add("project");
        const title = document.createElement('div');
        title.classList.add('project-title');
        title.textContent = element.title;
        project.appendChild(title);
        projectContainer.appendChild(project);
    });
    return projectContainer;
}

function drawTodoContainer() {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    //add todos here
    return todoContainer;
}

function drawDetailsContainer() {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');
    detailsContainer.appendChild(drawTodoDetails.drawTodoDetails());
    return detailsContainer;
}

export {setProjectContainer}