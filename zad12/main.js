const entries = document.querySelectorAll('li');;
const buttons = document.querySelectorAll('button');



//usun za pomoca dataset
const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`[data-key="${index}"]`).remove()
}
buttons.forEach(item => {
    item.addEventListener('click', removeTask)
})


//przekreslenie przez kliniecie na button
// buttons.forEach((button, index) => {
//     button.addEventListener('click', function () {
//         entries[index].style.textDecoration = "line-through";
//     })
// })


//usuniecie przez klinkniecie na button
// buttons.forEach((button, index) => {
//     button.addEventListener('click', function () {
//         entries[index].remove();
//     })
// })


//usuniecie przez klikniecie na element
// document.querySelectorAll('li').forEach(element => {
//     element.addEventListener('click', function () {
//         this.remove()
//     })
// })