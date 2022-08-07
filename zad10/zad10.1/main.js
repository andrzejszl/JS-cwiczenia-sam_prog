function time() {
    let date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    document.querySelector('div.clock span').textContent = `${hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? "0"+sec : sec}`
}

setInterval(time, 1000);