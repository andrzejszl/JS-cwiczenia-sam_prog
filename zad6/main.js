const codesNumber = 100;
const codeLength = 10;

const button = document.querySelector("button");
const section = document.querySelector('section');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const randomizeCodes = () => {
    for (j = 0; j < codesNumber; j++) {
        let code = "";
        for (i = 0; i < codeLength; i++) {
            let randomIndex = Math.floor(Math.random() * chars.length);
            code = code.concat(chars[randomIndex]);
        }
        let div = document.createElement('div');
        div.innerText = code;
        section.appendChild(div);
    }
}

button.addEventListener('click', randomizeCodes);