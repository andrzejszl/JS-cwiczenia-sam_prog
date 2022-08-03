let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    if (e.keyCode == '38' && red > 0) {
        red -= 5;
        green -= 5;
        blue -= 5;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else if (e.keyCode == '40' && red < 255) {
        red += 5;
        green += 5;
        blue += 5;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
}


const changeColor2 = (e) => {
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red > 0? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
            break;

        default:
            break;
    }
}



// window.addEventListener('keydown', changeColor);
window.addEventListener('keydown', changeColor2);


//38 up
//40 down