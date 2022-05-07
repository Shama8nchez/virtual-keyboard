const body = document.body;
let capsPress = false;
let ruL = false;
let cL = false;

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
let lettersru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersruShift = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];

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
  e.preventDefault()
  const actKey = document.querySelector('.key[data-num="'+e.keyCode+e.location.toString()+'"');
  actKey.classList.add('key-active');
  if (actKey.dataset.num == 161 || actKey.dataset.num == 162) {
    const letter = document.querySelectorAll('.key');
    for (let i = 0; i < letter.length; i++) {
      letter[i].innerHTML = lettersShift[i]
    }
  }

  if (e.altKey && e.ctrlKey) {
    const letter = document.querySelectorAll('.key');
    if (!ruL) {      
      if (!cL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersru[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersruShift[i]
        }
      }
      ruL = true;
    }
    else {      
      if (!cL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = letters[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersShift[i]
        }
      }
      ruL = false;
    }
  }
  /* console.log(e.key) */
  const textArea = document.querySelector('#text-field');
  let l = e.key;
  if (l == "Backspace") {
    /* textArea.value= textArea.value.slice(0, +n.value - 1) + textArea.value.slice(+n.value) */
    l = '';
    textArea.setRangeText(l, textArea.selectionStart-1, textArea.selectionEnd, "end");
    textArea.focus();
  }
  else if (l == "Delete") {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd + 1, "end");
    textArea.focus();
  }

  else if (l == "Shift" || l == "Control" || l == "Alt" || l == "Meta") {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else if (l == "Tab") {
    l = '    '
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else if (l == "Enter") {
    l = '\n'
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else {
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }
  /* let text = '';
  let l = e.key;
  if (l == "Shift" || l == "Ctrl" || l == "Alt" || l == "Win") {
    l = '';
  };
  if (l == "Tab") {
    l = '    '
  }
  if (l == "Enter") {
    l = '\n'
  }
  text += l;
  textArea.value += text; */
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

const letterKeys = document.querySelectorAll('.key')
letterKeys.forEach(letterKey => letterKey.addEventListener('click', (e) => {
  let l = letterKey.innerHTML;
  const textArea = document.querySelector('#text-field');
  if (l == "Backspace") {
    /* textArea.value= textArea.value.slice(0, +n.value - 1) + textArea.value.slice(+n.value) */
    l = '';
    textArea.setRangeText(l, textArea.selectionStart-1, textArea.selectionEnd, "end");
    textArea.focus();
  }
  else if (l == "Del") {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd + 1, "end");
    textArea.focus();
  }

  else if (l == "Shift" || l == "Ctrl" || l == "Alt" || l == "Win") {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else if (l == "Tab") {
    l = '    '
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else if (l == "Enter") {
    l = '\n'
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else {
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }
}))
