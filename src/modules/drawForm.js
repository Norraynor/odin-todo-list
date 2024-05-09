   
function createForm(itemName, item) {
	const dialog = document.createElement("dialog");
	dialog.classList.add("form");
	const form = document.createElement("form");
	const fieldset = document.createElement("fieldset");
	const legend = document.createElement("legend");
	legend.textContent = itemName;
    //add to form in for loop
    let properties = Object.getOwnPropertyNames(item).filter(
        (element) => typeof item[element] !== "function"
    );
    properties.forEach((key) => {
        const label = document.createElement("label");
        label["for"] = key;
        //for = same as input id
        const input = document.createElement("input");
        input.id = key;
        //id = same as for in label
        const div = document.createElement("div");
        div.appendChild(label);
        div.appendChild(input);
        legend.appendChild(div);
    });
	const confirmButton = document.createElement("button");
    const closeButton = document.createElement("button");


    fieldset.appendChild(legend);
    form.appendChild(fieldset);
    dialog.appendChild(form);
    return dialog;
}

export {createForm}