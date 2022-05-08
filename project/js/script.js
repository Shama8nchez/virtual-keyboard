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

let arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
let lettersCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
let lettersShiftC = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']

let keyNum = [1920, 490, 500, 510, 520, 530, 540, 550, 560, 570, 480, 1890, 1870, 80, 90, 810, 870, 690, 820, 840, 890, 850, 730, 790, 800, 2190, 2210, 2200, 460, 200, 650, 830, 680, 700, 710, 720, 740, 750, 760, 1860, 2220, 130, 161, 900, 880, 670, 860, 660, 780, 770, 1880, 1900, 1910, 380, 162, 171, 911, 181, 320, 182, 370, 400, 390, 172]
let lettersru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersruShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersruCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];
let lettersruShiftC = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'Up', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'];

/* document.onkeydown = function(e) {
  arr.push(e.code);
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
  letter.dataset.num = `${arr[i]}`
  keyboard.appendChild(letter);
}

document.onkeydown = function(e) {
  e.preventDefault()
  const actKey = document.querySelector('.key[data-num="' + e.code + '"');
   
  actKey.classList.add('key-active');  
  if (actKey.dataset.num == 'ShiftLeft' || actKey.dataset.num == 'ShiftRight') {      //SHIFT  161 162
    shiftDown();
  }

  if (e.altKey && e.ctrlKey) {                                     //Languages
    const letter = document.querySelectorAll('.key');
    if (!ruL) {      
      if (!cL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersru[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersruCaps[i]
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
          letter[i].innerHTML = lettersCaps[i]
        }
      }
      ruL = false;
    }
  }

  if (actKey.dataset.num == 'CapsLock') {                          //CapsLock  200
    pushCaps(actKey);

  }
  
  const textArea = document.querySelector('#text-field');
  let l = actKey.innerHTML;   //let l = e.key;
  if (l == "Backspace") {
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

  else if (l == "CapsLock") {
    l = ''
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else {
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }
}


document.onkeyup = function(e) {
  const actKey = document.querySelector('.key[data-num="' + e.code + '"');   //('.key[data-num="'+e.keyCode+e.location.toString()+'"');
  if (actKey.dataset.num !== 'CapsLock') {
    actKey.classList.remove('key-active');
  }
  
  if (actKey.dataset.num == 'ShiftLeft' || actKey.dataset.num == 'ShiftRight') {
    shiftUp();
  }
}

const letterKeys = document.querySelectorAll('.key')
letterKeys.forEach(letterKey => letterKey.addEventListener('click', (e) => {
  if (letterKey.dataset.num == 'CapsLock') {                          //CapsLock  200
    pushCaps(letterKey);
  }

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

  else if (l == "CapsLock") {    
    l = ''
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }

  else {
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, "end");
    textArea.focus();
  }
}))

const LShift = document.querySelector('.key[data-num="ShiftLeft"');
const RShift = document.querySelector('.key[data-num="ShiftRight"');

LShift.addEventListener('mousedown', shiftDown)
RShift.addEventListener('mousedown', shiftDown)
LShift.addEventListener('mouseup', shiftUp)
RShift.addEventListener('mouseup', shiftUp)

function pushCaps(k) {
  const letter = document.querySelectorAll('.key');

    if (!cL) {
      cL = true;
      k.classList.add('key-active');

      if (!ruL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersCaps[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersruCaps[i]
        }
      }
    }
    else {
      cL = false;
      k.classList.remove('key-active');
      if (!ruL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = letters[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersru[i]
        }
      }
    }
}

function shiftDown() {
  const letter = document.querySelectorAll('.key');
  if (!ruL) {
    if (!cL) {
      for (let i = 0; i < letter.length; i++) {
        letter[i].innerHTML = lettersShift[i]
      }
    }
    else {
      for (let i = 0; i < letter.length; i++) {
        letter[i].innerHTML = lettersShiftC[i]
      }
    }
  }
  else {
    if (!cL) {
      for (let i = 0; i < letter.length; i++) {
        letter[i].innerHTML = lettersruShift[i]
      }
    }
    else {
      for (let i = 0; i < letter.length; i++) {
        letter[i].innerHTML = lettersruShiftC[i]
      }
    }
  }
}

function shiftUp() {
  const letter = document.querySelectorAll('.key');
    if (!ruL) {
      if (!cL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = letters[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersCaps[i]
        }
      }
    }
    else {
      if (!cL) {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersru[i]
        }
      }
      else {
        for (let i = 0; i < letter.length; i++) {
          letter[i].innerHTML = lettersruCaps[i]
        }
      }

    }
}