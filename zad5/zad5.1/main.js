const input = document.querySelector('input');
const div = document.querySelector('div');

const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'działa!'];

const showMessage = (e) => {
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (password.toLowerCase() === e.target.value.toLowerCase()) {
            div.textContent = messages[index];
            input.value = '';
        }
    })
}

input.addEventListener('input', showMessage);