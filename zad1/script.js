const btn = document.querySelector("button");

let number = 0;
const createElement = () => {
    number++;
    const divElement = document.createElement('div');
    divElement.textContent = number;
    document.querySelector(".wrap").appendChild(divElement);
    number % 5 === 0 ? divElement.className = "roundDiv icon" : divElement.className = "squareDiv icon";
}

btn.addEventListener("click", createElement)