const btnMain = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const panel = document.querySelector('.time div');

let time = 0;

let started = false;

let startCounter = () => {
    time++;
    // let seconds = Math.floor((time / 100)) < 10 ? `0${Math.floor((time / 100))}` : `${Math.floor((time / 100))}`
    // let miliseconds = time - seconds * 100 < 10 ? `0${time - seconds * 100}` : `${time - seconds * 100}`
    // panel.textContent = `${seconds}.${miliseconds}`;
    panel.textContent = (time / 100).toFixed(2)
}

let interval;

const startTimer = () => {
    if (!started) { //click start
        started = !started;
        btnMain.textContent = "Pause";
        interval = setInterval(startCounter, 10);
    } else { //click pause
        btnMain.textContent = "Start";
        started = !started;
        clearInterval(interval)
    }
}

const reset = () => {
    clearInterval(interval);
    started = false;
    btnMain.textContent = "Start";
    panel.textContent = "---";
    time = 0;
}

btnMain.addEventListener('click', startTimer);
btnReset.addEventListener('click', reset);