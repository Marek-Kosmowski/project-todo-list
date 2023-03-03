// const navContent = document.querySelector('.content-nav')

// let newItems;
// //ADDING NEW ITEM:
// function createItem() {
//     newItems = document.createElement('li');
//     newItems.innerText = userInput.value;
//     userInput.value = "";
//     toolsArea();
//     navContent.appendChild(newItems);
// }
// //DELETING ITEM:
// function deleteItem(el) {
//     const removeItem = el.target.closest('li')
//     removeItem.remove();
// }
// //CREATING DONE AND REMOVE BUTTON:
// function toolsArea() {
//     const tools = document.createElement('div');
//     tools.classList.add('tools');
//     newItems.appendChild(tools);

//     const doneBtn = document.createElement('button');
//     doneBtn.classList.add('doneBtn');
//     doneBtn.innerText = 'Done';

//     const removeBtn = document.createElement('button');
//     removeBtn.classList.add('removeBtn');
//     removeBtn.innerText = 'Remove';

//     tools.appendChild(doneBtn);
//     tools.appendChild(removeBtn);
// }


// function checkClass(el) {
//     if (el.target.closest('button').classList.contains('doneBtn')) {
//         el.target.closest('li').classList.toggle('done');
//     } else if (el.target.closest('button').classList.contains('removeBtn')) {
//         deleteItem(el);
//     }
// }

// export {
//     createItem,
//     deleteItem,
//     toolsArea,
//     checkClass
// }

const navContent = document.querySelector('.content-nav');
const newProjectBtn = document.createElement('button');
newProjectBtn.classList.add('new-project-button')
newProjectBtn.innerText = 'ADD'
navContent.appendChild(newProjectBtn);
// const projectList = document.querySelector('.project-list');
function createProjectList() {
    const projectList = document.createElement('ul');
    const userInput = document.createElement('input')
    userInput.classList.add('project-title-input');
    projectList.classList.add('project-list');
    navContent.append(projectList, userInput);

}

newProjectBtn.addEventListener('click', addProject);


function addProject() {
    const newProject = document.createElement('li');
    const projectList = document.querySelector('.project-list')
    const userInput = document.querySelector('.project-title-input')
    newProject.classList.add('project-title-nav')
    newProject.innerText = userInput.value;
    newProject.value = '';
    projectList.appendChild(newProject);
}



export default createProjectList();