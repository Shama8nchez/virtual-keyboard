const body = document.body;

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

//let arr = [];
let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']

/* document.onkeydown = function(e) {
  arr.push(e.key);
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
  letter.innerHTML = letters[i]
  keyboard.appendChild(letter)
}