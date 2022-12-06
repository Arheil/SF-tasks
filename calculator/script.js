let a = '';
let b = '';
let sign = '';
let end = false;

const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+', '-', 'X', '/', '.'];

const input = document.querySelector('#inputWindow');
const c = document.querySelector('#btn_clr');
const btn = document.querySelectorAll('.btn');

c.addEventListener('click', clearAll);

function clearAll() {
  a = '0';
  let sign = '';
  b = '0';
  input.value = '0';
  sign = '';
}

btn.forEach((item) =>
  item.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn')) return;
    if (e.target.classList.contains('#btn_clr')) return;

    input.value = '';

    const key = e.target.textContent;

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

    if (action.includes(key)) {
      sign = key;
      input.value = sign;
      return;
    }

    if (key === '=') {
      // if (b === '') b = a;
      switch (sign) {
        case '+':
          a = Number(a) + Number(b);
          break;

        case '-':
          a = a - b;
          break;

        case 'X':
          a = a * b;
          break;

        case '/':
          if (b === '0') {
            a = '';
            b = '';
            input.value = '0';
            return;
          }
          a = a / b;
          break;
      }
      end = true;
      input.value = a;
    }
  })
);
