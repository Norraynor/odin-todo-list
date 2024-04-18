function createProjectContainer() {
	let projectItems = [];
    let currentProject = null;
	function addItem(projectItem) {
		projectItems.push(projectItem);
	}
	function getItems() {
		return projectItems;
    }
    function selectProject(index) {
        currentProject = projectItems[index];
    }
    function getCurrentProject() {
        return currentProject;
    }
	return {
		addItem,
		getItems,
		selectProject,
		getCurrentProject,
	};
}

export { createProjectContainer };
