const slideList = [{
    img: 'images/img1.jpg',
    text: 'Pierwszy tekst',
}, {
    img: 'images/img2.jpg',
    text: 'Drugi tekst',
}, {
    img: 'images/img3.jpg',
    text: 'Trzeci tekst',
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

const dots = [...document.querySelectorAll('div.dots span')];

//zmiana slajdu po kliknięciu
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        active = index - 1;
        changeSlide();
    })
})

//zmiana slajdu za pomoca strzalek
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        active--;
        if (active < 0) active = slideList.length - 1;
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();

    } else if (e.key === "ArrowRight") {
        active++;
        if (active === slideList.length) active = 0;
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
    }
})

//interfejs
const time = 3000;
let active = 0;

const changeDot = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(changeSlide, time);
    document.querySelector('div.dots span.active').classList.remove('active');
    dots[active].classList.add('active')
}

const changeSlide = () => {
    active++
    if (active === slideList.length) active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let sliderTimer = setInterval(changeSlide, time);
//implementacje