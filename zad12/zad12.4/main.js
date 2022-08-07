const addButton = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul.first');
const ul2 = document.querySelector('ul.second')
const listElements = document.getElementsByClassName('list');
const listElements2 = document.getElementsByClassName('list2');
const rmvButtons = Array.from(document.getElementsByClassName('rmv'));
const findInput = document.querySelector('input.findInput')
let liElem;

const addTask = () => {
    const liElement = document.createElement('li');
    const liElement2 = document.createElement('li');
    if (input.value === "") return;
    liElement.innerHTML = `${input.value}<button class="rmv">Delete</button>`;
    liElement2.innerHTML = `${input.value}`;
    liElement.classList = "list";
    liElement2.classList = "list2";
    ul.appendChild(liElement);
    ul2.appendChild(liElement2);
    input.value = "";
    liElement.querySelector('button').addEventListener('click', deleteItem)

}

const deleteItem = (e) => {
    e.target.parentNode.remove()
}

const search = () => {
    const searchedText = findInput.value.toLowerCase();
    liElem = Array.from(listElements2);
    liElemClone = Array.from(listElements2);
    liElem = liElem.filter(li => li.textContent.toLowerCase().includes(searchedText))
    ul2.textContent = "";
    liElem.forEach(li => ul2.appendChild(li))
}



findInput.addEventListener('input', search);

addButton.addEventListener('click', addTask)