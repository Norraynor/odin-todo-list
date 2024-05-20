function saveProject(projectArray) {
    localStorage.setItem('main', projectArray);
}

function saveTodo(projectTitle,todoArray) {
    localStorage.setItem(projectTitle, JSON.stringify(todoArray));
}

// projects container key: name value: key of project
//todos in project: key: from container value: all todos

export {
    saveProject,
    saveTodo
}