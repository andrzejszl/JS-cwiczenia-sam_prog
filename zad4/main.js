document.body.addEventListener("click", (event) => {
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = e => {
    if (!(e.clientX % 2) && !(e.clientY % 2)) {
        return "red";
    } else if (e.clientX % 2 && e.clientY % 2) {
        return "blue";
    } else {
        return "green";
    }
}