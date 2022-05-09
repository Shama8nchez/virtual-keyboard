'use strict';

if (!localStorage.getItem('condition')) {
  localStorage.setItem('condition', '[0, false, false]');
}
let cond = JSON.parse(localStorage.getItem('condition'));
let [index, ruL, cL] = cond;

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

const description = document.createElement('p');
description.classList.add('description');
description.innerHTML = 'Клавиатура создана в операционной системе Windows. Комбинация для переключения языка: левыe ctrl + alt';
document.body.appendChild(description);

let arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
let letters = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersShiftC = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];

let lettersru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersruShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersruCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let lettersruShiftC = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&uArr;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&lArr;', '&dArr;', '&rArr;', 'Ctrl'];
let keyArr = [letters, lettersCaps, lettersru, lettersruCaps];

for (let i = 0; i < letters.length; i += 1) {
  const letter = document.createElement('div');
  letter.classList.add('key');
  if (keyArr[index][i] === 'Backspace' || keyArr[index][i] === 'CapsLock' || keyArr[index][i] === 'Enter' || keyArr[index][i] === 'Shift') {
    letter.classList.add('key-double');
    if (keyArr[index][i] === 'CapsLock' && cL) {
      letter.classList.add('key-active');
    }
  }
  if (keyArr[index][i] === ' ') {
    letter.classList.add('keyspace');
  }
  letter.innerHTML = keyArr[index][i];
  letter.dataset.num = `${arr[i]}`;
  keyboard.appendChild(letter);
}

function pushCaps(k) {
  const letter = document.querySelectorAll('.key');

  if (!cL) {
    cL = true;
    k.classList.add('key-active');
    if (!ruL) {
      localStorage.setItem('condition', '[1, false, true]');
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersCaps[i];
      }
    } else {
      localStorage.setItem('condition', '[3, true, true]');
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersruCaps[i];
      }
    }
  } else {
    cL = false;
    k.classList.remove('key-active');
    if (!ruL) {
      localStorage.setItem('condition', '[0, false, false]');
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = letters[i];
      }
    } else {
      localStorage.setItem('condition', '[2, true, false]');
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersru[i];
      }
    }
  }
}

function shiftDown() {
  const letter = document.querySelectorAll('.key');
  if (!ruL) {
    if (!cL) {
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersShift[i];
      }
    } else {
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersShiftC[i];
      }
    }
  } else if (!cL) {
    for (let i = 0; i < letter.length; i += 1) {
      letter[i].innerHTML = lettersruShift[i];
    }
  } else {
    for (let i = 0; i < letter.length; i += 1) {
      letter[i].innerHTML = lettersruShiftC[i];
    }
  }
}

function shiftUp() {
  const letter = document.querySelectorAll('.key');
  if (!ruL) {
    if (!cL) {
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = letters[i];
      }
    } else {
      for (let i = 0; i < letter.length; i += 1) {
        letter[i].innerHTML = lettersCaps[i];
      }
    }
  } else if (!cL) {
    for (let i = 0; i < letter.length; i += 1) {
      letter[i].innerHTML = lettersru[i];
    }
  } else {
    for (let i = 0; i < letter.length; i += 1) {
      letter[i].innerHTML = lettersruCaps[i];
    }
  }
}

function typeLetters(k) {
  let l = k.innerHTML;
  const textArea = document.querySelector('#text-field');
  if (l === 'Backspace') {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart - 1, textArea.selectionEnd, 'end');
    textArea.focus();
  } else if (l === 'Del') {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd + 1, 'end');
    textArea.focus();
  } else if (l === 'Shift' || l === 'Ctrl' || l === 'Alt' || l === 'Win') {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, 'end');
    textArea.focus();
  } else if (l === 'Tab') {
    l = '    ';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, 'end');
    textArea.focus();
  } else if (l === 'Enter') {
    l = '\n';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, 'end');
    textArea.focus();
  } else if (l === 'CapsLock') {
    l = '';
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, 'end');
    textArea.focus();
  } else {
    textArea.setRangeText(l, textArea.selectionStart, textArea.selectionEnd, 'end');
    textArea.focus();
  }
}

document.onkeydown = function kd(e) {
  e.preventDefault();
  const actKey = document.querySelector('.key[data-num="' + e.code + '"');
  actKey.classList.add('key-active');
  if (actKey.dataset.num === 'ShiftLeft' || actKey.dataset.num === 'ShiftRight') {
    shiftDown();
  }

  if (e.altKey && e.ctrlKey) {
    const letter = document.querySelectorAll('.key');
    if (!ruL) {
      if (!cL) {
        localStorage.setItem('condition', '[2, true, false]');
        for (let i = 0; i < letter.length; i += 1) {
          letter[i].innerHTML = lettersru[i];
        }
      } else {
        localStorage.setItem('condition', '[3, true, true]');
        for (let i = 0; i < letter.length; i += 1) {
          letter[i].innerHTML = lettersruCaps[i];
        }
      }
      ruL = true;
    } else {
      if (!cL) {
        localStorage.setItem('condition', '[0, false, false]');
        for (let i = 0; i < letter.length; i += 1) {
          letter[i].innerHTML = letters[i];
        }
      } else {
        localStorage.setItem('condition', '[1, false, true]');
        for (let i = 0; i < letter.length; i += 1) {
          letter[i].innerHTML = lettersCaps[i];
        }
      }
      ruL = false;
    }
  }

  if (actKey.dataset.num === 'CapsLock') {
    pushCaps(actKey);
  }
  typeLetters(actKey);
};

document.onkeyup = function ku(e) {
  const actKey = document.querySelector('.key[data-num="' + e.code + '"');
  function a() {
    actKey.classList.remove('key-active');
  }
  if (actKey.dataset.num !== 'CapsLock') {
    setTimeout(a, 100);
  }
  if (actKey.dataset.num === 'ShiftLeft' || actKey.dataset.num === 'ShiftRight') {
    shiftUp();
  }
};

const letterKeys = document.querySelectorAll('.key');
letterKeys.forEach(letterKey => letterKey.addEventListener('click', () => {
  if (letterKey.dataset.num === 'CapsLock') {
    pushCaps(letterKey);
  }

  typeLetters(letterKey);
}));

letterKeys.forEach(letterKey => letterKey.addEventListener('mousedown', () => {
  if (letterKey.dataset.num !== 'CapsLock') {
    letterKey.classList.add('key-active');
  }
}));

letterKeys.forEach(letterKey => letterKey.addEventListener('mouseup', () => {
  function a() {
    letterKey.classList.remove('key-active');
  }

  if (letterKey.dataset.num !== 'CapsLock') {
    setTimeout(a, 100);
  }
}));

const LShift = document.querySelector('.key[data-num="ShiftLeft"');
const RShift = document.querySelector('.key[data-num="ShiftRight"');

LShift.addEventListener('mousedown', shiftDown);
RShift.addEventListener('mousedown', shiftDown);
LShift.addEventListener('mouseup', shiftUp);
RShift.addEventListener('mouseup', shiftUp);
