const books = [
  { name: 'This book is 29% bipolar', image: 'images/1.jpeg' },
  { name: '2', image: 'images/2.jpeg' },
  { name: '3', image: 'images/3.jpeg' },
  { name: '4', image: 'images/4.jpeg' },
  { name: 'This is not a book', image: 'images/5.jpeg' },
  { name: '6', image: 'images/6.jpeg' },
  { name: 'Non-bipolar data book', image: 'images/7.jpeg' },
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
  let header = document.querySelector('h1');
  header.innerText = 'Are you bipolar?';

  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex++;

  if (bookIndex == 6) {
    bookIndex = -1;
    // colorIndex = 0;
  }

  bookIndex++;
  img.src = books[bookIndex].image;

  if (bookIndex >= colors.length) {
    colorIndex = 0;
    bookIndex = -1;
    document.body.style.backgroundColor = 'grey';
  }
});

btn2.addEventListener('click', () => {
  // for (let i = 0; i < 7; i++) {
  //   setTimeout(loop, 500);
  //   img.src = books[i].image;
  // }
  // img.src = books[1].image;
  // setTimeout(loop, 500);
  // img.src = books[2].image;

  if (bookIndex == -1) {
    bookIndex = 6;
    // colorIndex = 0;
  }

  setTimeout(loop, 1000);
  img.src = 'images/book.ico';

  let header = document.querySelector('h1');
  header.innerText = books[bookIndex].name;
});

function mouseOver() {
  document.getElementById('mouse').style.color = 'red';
}

function mouseOut() {
  document.getElementById('mouse').style.color = 'black';
}

function loop() {
  img.src = books[bookIndex].image;
}
