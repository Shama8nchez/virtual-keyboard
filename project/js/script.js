const body = document.body;
let capsPress = false;

const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Virtual Keyboard';
document.body.appendChild(title);

const field = document.createElement('textarea');
field.name = 'field';
field.id = 'text-field';
field.cols = '101';
field.rows = '10';
document.body.appendChild(field);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.appendChild(keyboard);

/* let arr = []; */
let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
let keyNum = [1920, 490, 500, 510, 520, 530, 540, 550, 560, 570, 480, 1890, 1870, 80, 90, 810, 870, 690, 820, 840, 890, 850, 730, 790, 800, 2190, 2210, 2200, 460, 200, 650, 830, 680, 700, 710, 720, 740, 750, 760, 1860, 2220, 130, 161, 900, 880, 670, 860, 660, 780, 770, 1880, 1900, 1910, 380, 162, 171, 911, 181, 320, 182, 370, 400, 390, 172]

/* document.onkeydown = function(e) {
  arr.push(e.keyCode);
  console.log(arr);
} */

for (let i = 0; i < letters.length; i++) {
  const letter = document.createElement('div');
  letter.classList.add('key');
  if (letters[i] == 'Backspace' || letters[i] == 'CapsLock' || letters[i] == 'Enter' || letters[i] == 'Shift') {
    letter.classList.add('key-double');
  }
  if (letters[i] == ' ') {
    letter.classList.add('keyspace');
  }
  letter.innerHTML = letters[i];
  letter.dataset.num = `${keyNum[i]}`
  keyboard.appendChild(letter);
}

document.onkeydown = function(e) {
  const actKey = document.querySelector('.key[data-num="'+e.keyCode+e.location.toString()+'"');
  actKey.classList.add('key-active');
  if (actKey.dataset.num == 161 || actKey.dataset.num == 162) {
    const letter = document.querySelectorAll('.key');
    for (let i = 0; i < letter.length; i++) {
      letter[i].innerHTML = lettersShift[i]
    }
  }
  /* console.log(e.key) */
  const textArea = document.querySelector('#text-field');
  let text = '';
  text += e.key
  text
  textArea.value += text;
}

document.onkeyup = function(e) {
  const actKey = document.querySelector('.key[data-num="'+e.keyCode+e.location.toString()+'"');
  actKey.classList.remove('key-active')
  /* console.log("Location of key pressed: " + e.location); */
  if (actKey.dataset.num == 161 || actKey.dataset.num == 162) {
    const letter = document.querySelectorAll('.key');
    for (let i = 0; i < letter.length; i++) {
      letter[i].innerHTML = letters[i]
    }
  }
}


