let counter = 1;
let fontSize = 10;


const init = () => {
    //button
    const btn = document.createElement("button");
    btn.textContent = "Stwórz listę"

    //reset
    const reset = document.createElement("button");
    reset.textContent = "Reset";
    reset.style.margin = "0 20px";

    //ul
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.margin = "20px 0 0 20px"

    //add button and ul
    document.body.appendChild(btn);
    document.body.appendChild(reset);
    document.body.appendChild(ul);

    //add listener on button
    btn.addEventListener("click", addElements);

    //add reset listener and function
    reset.addEventListener("click", () => {
        ul.innerHTML = "";
        counter = 1;
        fontSize = 10;
    })
}

const addElements = () => {
    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li");
        li.textContent = `Element nr ${counter}`;
        li.style.fontSize = `${fontSize + counter++}px`;
        document.querySelector("ul").appendChild(li);
    }
}

init();