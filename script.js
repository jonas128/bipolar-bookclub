const books = [
  { name: '1', image: 'images/1.jpeg' },
  { name: '2', image: 'images/2.jpeg' },
  { name: '3', image: 'images/3.jpeg' },
  { name: '4', image: 'images/4.jpeg' },
  { name: '5', image: 'images/5.jpeg' },
  { name: '6', image: 'images/6.jpeg' },
  { name: '7', image: 'images/7.jpeg' },
];

let img = document.querySelector('img');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

const colors = ['pink', 'red', 'green', 'blue', 'white', 'yellow'];
document.body.style.backgroundColor = 'pink';
const button = document.querySelector('button');

let colorIndex = 1;
let bookIndex = 0;

btn1.addEventListener('click', () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;

  bookIndex++;
  img.src = books[bookIndex].image;

  if (bookIndex >= colors.length) {
    colorIndex = 0;
    bookIndex = -1;
    document.body.style.backgroundColor = 'black';
  }
});

btn2.addEventListener('click', () => {
  img.src = 'images/book.ico';
});
