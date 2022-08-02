const btn = document.querySelector("button");
const liArray = [...document.querySelectorAll("li")];
let font = 10;

const actionFor = () => {
    for (let i = 0; i < liArray.length; i++) {
        console.log(liArray[i].style.display);
        if (!liArray[i].style.display) {
            liArray[i].style.display = "block";
        }
        liArray[i].style.fontSize = `${font}px`;
    }
    font++;
}

const actionEach = () => {
    liArray.forEach(li => {
        if (!li.style.display) {
            li.style.display = "block";
        }
        li.style.fontSize = `${font}px`;
    })
    font++;
}


// btn.addEventListener("click", actionFor);
btn.addEventListener("click", actionEach);