const books = [
  { name: '1', image: 'images/1.jpeg' },
  { name: '2', image: 'images/2.jpeg' },
  { name: '3', image: 'images/3.jpeg' },
  { name: '4', image: 'images/4.jpeg' },
  { name: '5', image: 'images/5.jpeg' },
  { name: '6', image: 'images/6.jpeg' },
];

let img = document.querySelector('img');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

const colors = ['red', 'green', 'blue', 'tomato'];

const button = document.querySelector('button');

let currentColorIndex = 0;

btn3.addEventListener('click', () => {
  document.body.style.color = colors[currentColorIndex];

  currentColorIndex++;

  if (currentColorIndex > colors.length) {
    currentColorIndex = 0;
  }
});

for (let i = 1; i < 6; i++) {
  btn1.addEventListener('click', () => {
    img.src = books[3].image;
  });
  btn2.addEventListener('click', () => {
    img.src = 'images/6.jpeg';
  });
}
