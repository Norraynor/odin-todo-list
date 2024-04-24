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

function drawTodoContainer(project) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');
    //add todos here
    const selectedProjectItems = project.getItems();
    selectedProjectItems.forEach(element => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        const title = document.createElement("div");
        title.classList.add("todo-title");
        title.textContent = element.title;
        const priority = document.createElement("div");
        priority.classList.add("todo-priority");
        priority.textContent = element.priority;
        const dueDate = document.createElement("div");
        dueDate.classList.add("todo-due-date");
        dueDate.textContent = element.dueDate;
        todo.appendChild(title);
        todo.appendChild(priority);
        todo.appendChild(dueDate);
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