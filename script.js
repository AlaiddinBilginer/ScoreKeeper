const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const number1Span = document.querySelector('#number1');
const number2Span = document.querySelector('#number2');
const finalNumber = document.querySelector('#final-number');
const containerDiv = document.querySelector('.container');

let number1 = 0;
let number2 = 0;

player1Button.addEventListener('click', function () {
  number1++;
  number1Span.innerText = number1;
  const finalNumberValue = parseInt(finalNumber.value);
  if (number1 === finalNumberValue) {
    number1Span.style.color = 'green';
    number2Span.style.color = 'red';

    player1Button.disabled = true;
    player1Button.classList.add('disabled-btn');
    player2Button.disabled = true;
    player2Button.classList.add('disabled-btn');

    createDialog(1);
  } else {
    number1Span.style.color = 'black';
  }
});

player2Button.addEventListener('click', function () {
  number2++;
  number2Span.innerText = number2;
  const finalNumberValue = parseInt(finalNumber.value);
  if (number2 === finalNumberValue) {
    number2Span.style.color = 'green';
    number1Span.style.color = 'red';
    player1Button.disabled = true;
    player1Button.classList.add('disabled-btn');
    player2Button.disabled = true;
    player2Button.classList.add('disabled-btn');

    createDialog(2);
  } else {
    number2Span.style.color = 'black';
  }
});

resetButton.addEventListener('click', function () {
  number1 = 0;
  number2 = 0;
  number1Span.innerText = number1;
  number2Span.innerText = number2;
  number1Span.style.color = 'black';
  number2Span.style.color = 'black';
  player1Button.disabled = false;
  player1Button.classList.remove('disabled-btn');
  player2Button.disabled = false;
  player2Button.classList.remove('disabled-btn');
});

function createDialog(playerNumber) {
  const dialogEl = document.createElement('dialog');
  dialogEl.classList.add('dialog-box');

  const dialogButton = document.createElement('button');
  dialogButton.innerText = 'Close';

  const paragraph = document.createElement('p');
  paragraph.innerText = `Player ${playerNumber} won!`;

  dialogEl.appendChild(paragraph);
  dialogEl.appendChild(dialogButton);
  document.body.appendChild(dialogEl);

  dialogEl.showModal();

  dialogButton.addEventListener('click', function () {
    dialogEl.close();
  });
}
