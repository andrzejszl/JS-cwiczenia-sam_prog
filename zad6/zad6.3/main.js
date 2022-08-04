const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

const expressions = ['Walcz!', 'Przemyśl to jeszcze raz...'];


const addExpression = (e) => {
    e.preventDefault();
    if (input.value) {
        expressions.push(input.value)
        alert(`Dodałeś: ${input.value}`)
        input.value = '';
        console.log(expressions);
    }
}

const showOptions = () => {
    alert(`Możliwe opcje to: ${expressions.join('---')}`)
}

const clearExpressions = (e) => {
    e.preventDefault();
    expressions.length = 0;
}

const showAdvice = () => {
    randomIndex = Math.floor(Math.random() * expressions.length);
    h1.textContent = expressions[randomIndex];
}

btnAdd.addEventListener('click', addExpression);
btnClean.addEventListener('click', clearExpressions);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);