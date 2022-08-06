const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor')
const txt = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo pariatur minima ad quisquam debitis voluptatem dolor, numquam porro necessitatibus expedita recusandae, neque iste mollitia aperiam. Quae corrupti doloremque dolorem ab!';
const time = 10;

let indexText = 0;
const addLetter = () => {
    spanText.textContent += txt[indexText]
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping)
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active')
}


const indexTyping = setInterval(addLetter, time);

setInterval(cursorAnimation, 500);