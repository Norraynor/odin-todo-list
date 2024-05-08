   
function createForm(item,...args){
    const dialog = document.createElement('dialog');
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = item;
    //add to form in for loop
    const label = document.createElement('label');
    //for = same as input id
    const input = document.createElement('input');
    //id = same as for in label 
    const confirmButton = document.createElement('button');
    const closeButton = document.createElement('button');

}