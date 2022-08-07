const clock = () => {
    let seconds = 0;
    document.body.textContent = `Upłynęło 0 sekund`;
    const timer = () => {
        seconds++;
        document.body.textContent = `Upłynęło ${seconds} sekund`;
    }
    return timer
}

const czas = clock();
setInterval(czas, 1000)