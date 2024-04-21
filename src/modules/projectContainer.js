import * as projectItem from './projectItem';

function createProjectContainer() {
	let projectItems = [];
    let currentProject = null;
	function addItem(title, description) {
		let item = projectItem.createProjectItem(title, description);
		projectItems.push(item);
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
