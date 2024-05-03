import * as projectItem from './projectItem';

function createProjectContainer() {
	let projectItems = [];
	let currentProject = projectItems[0] ? projectItems[0] : null;
	function addItem(title, description) {
		let item = projectItem.createProjectItem(title, description);
		projectItems.push(item);
	}
	function getItems() {
		return projectItems;
    }
    function selectProject(index) {
		projectItems.forEach(element => {
			element.setSelected(false);
		})
		currentProject = projectItems[index];
		currentProject.setSelected(true);
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
