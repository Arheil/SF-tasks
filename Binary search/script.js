let minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;


let randomPhrase = [
  'Вы загадали число',
  'Может быть это ',
  'Легкотня! Это число ',
  'Вы точно загадали ',
  'А вдруг это ',
  'Нет сомнений, что это число ',
];

let arrLenght = randomPhrase.length;
let rndIndex = Math.floor(Math.random() *  arrLenght);

answerField.innerText = `${randomPhrase[rndIndex]} ${answerNumber}?`;

document.getElementById('btnOver').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
  }
});

document.getElementById('btnLess').addEventListener('click', function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.floor((minValue + maxValue) / 2 - 1);
      orderNumber--;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `${randomPhrase[rndIndex]} ${answerNumber}?`;
    }
  }
});

document.getElementById('btnEqual').addEventListener('click', function () {
  if (gameRun) {
    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
    gameRun = false;
  }
});

document.getElementById('btnRetry').addEventListener('click', function () {
  answerNumber = 0;
  prompt('Min value: ', minValue);
  prompt('Max value: ', maxValue);
  location.reload();
});
