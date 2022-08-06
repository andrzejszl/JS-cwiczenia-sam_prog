const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');

const text = ['DZIEŃ DOBRY!', 'FAJNIE, ŻE JESTEŚ :)', 'ZACZYNAMY... '];

let activeLetter = 0;
let activeText = 0;

const addLetter = () => {
    spanText.textContent += text[activeText][activeLetter];
    activeLetter++;
    if (activeLetter === text[activeText].length) {
        activeText++;

        if (activeText === text.length) return;

        return setTimeout(() => {
            activeLetter = 0;
            spanText.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100)
}

addLetter();

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 500);