const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
// selectors
let image = document.querySelector('.image')
let previousImage = document.querySelector('.previous side-bar')
let nextImage = document.querySelector('.next side-bar')
let button0 = document.querySelector('#button-0')
let button1 = document.querySelector('#button-1')
let button2 = document.querySelector('#button-2')
let button3 = document.querySelector('#button-3')
let button4 = document.querySelector('#button-4')
let button5 = document.querySelector('#button-5')

// starts with first image shown
image.setAttribute('src', './assets/1.jpg')

//starts with first button selected
button0.textContent = '●'

button0.addEventListener('click', function(){
    image.setAttribute('src', './assets/1.jpg')
    button0.textContent = '●'
    button1.textContent = '○'
    button2.textContent = '○'
    button3.textContent = '○'
    button4.textContent = '○'
    button5.textContent = '○'
})

button1.addEventListener('click', function(){
    image.setAttribute('src', './assets/2.jpg')
    button0.textContent = '○'
    button1.textContent = '●'
    button2.textContent = '○'
    button3.textContent = '○'
    button4.textContent = '○'
    button5.textContent = '○'
})

button2.addEventListener('click', function(){
    image.setAttribute('src', './assets/3.jpg')
    button0.textContent = '○'
    button1.textContent = '○'
    button2.textContent = '●'
    button3.textContent = '○'
    button4.textContent = '○'
    button5.textContent = '○'
})

button3.addEventListener('click', function(){
    image.setAttribute('src', './assets/4.jpg')
    button0.textContent = '○'
    button1.textContent = '○'
    button2.textContent = '○'
    button3.textContent = '●'
    button4.textContent = '○'
    button5.textContent = '○'
})

button4.addEventListener('click', function(){
    image.setAttribute('src', './assets/5.jpg')
    button0.textContent = '○'
    button1.textContent = '○'
    button2.textContent = '○'
    button3.textContent = '○'
    button4.textContent = '●'
    button5.textContent = '○'
})

button5.addEventListener('click', function(){
    image.setAttribute('src', './assets/6.jpg')
    button0.textContent = '○'
    button1.textContent = '○'
    button2.textContent = '○'
    button3.textContent = '○'
    button4.textContent = '○'
    button5.textContent = '●'
})