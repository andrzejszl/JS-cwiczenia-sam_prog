const button = document.querySelector('button');
const div = document.querySelector('div');

const input = document.querySelector('input');

let nameList = [];

const addName = (e) => {
    e.preventDefault();
    if (!nameList.includes(input.value) && input.value.length) {
        nameList.push(input.value);
        div.textContent = nameList.join(', ');
    } else if (!input.value.length) {
        alert('pusto')
    } else {
        alert('to już było')
    }
}

button.addEventListener('click', addName);