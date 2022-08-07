const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const serchedText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(serchedText))
    console.log(tasks);
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask)