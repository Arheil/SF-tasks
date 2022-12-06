let a = '';
let b = '';
let sign = '';
let end = false;

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+', '-', 'X', '/'];

const input = document.querySelector('#inputWindow');
const c = document.querySelector('#btn_clr');
const btn = document.querySelectorAll('.btn');

function clearAll() {
  let a = '';
  let sign = '';
  let b = '';
  let end = false;
  input.value = '0';
}

c.addEventListener('click', clearAll);

btn.forEach((item) =>
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;

    let key = e.target.textContent;
    
    if (num.includes(key)) { 
      
      if (b === '' && sign === '') {
        a += key;
        input.value = a;
      } else if (a !== '' && b !== '' && end) {
        b = key;
        end = false;
        input.value = b;
      } else {
        b += key;
        input.value = b;
      }
      return;
    }
  }
));
  