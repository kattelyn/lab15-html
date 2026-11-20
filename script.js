// Завдання 1: прості числа від 0 до 100, цикл while
function primeNumbers() {
  const numbers = [];
  let number = 2;
  while (number <= 100) {
    let divisor = 2;
    let prime = true;
    while (divisor * divisor <= number) {
      if (number % divisor === 0) { prime = false; break; }
      divisor++;
    }
    if (prime) numbers.push(number);
    number++;
  }
  return numbers;
}
// Завдання 2: do...while
function evenOdd() {
  const lines = [];
  let n = 0;
  do {
    lines.push(n + ' – ' + (n === 0 ? 'це нуль' : n % 2 === 0 ? 'парне число' : 'непарне число'));
    n++;
  } while (n <= 10);
  return lines;
}
// Завдання 3: ділення числа 10000 на 2
function divideNumber() {
  const numb = 10000;
  let result = numb;
  let counter = 0;
  while (result >= 50) {
    result /= 2;
    counter++;
  }
  console.log('result =', result, 'counter =', counter);
  return {result, counter};
}
// Завдання 4: місяць та пора року, prompt і alert
function monthInfo() {
  const input = prompt('Введіть номер місяця від 1 до 12:');
  if (input === null) return;
  const month = Number(input);
  const names = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
  if (!Number.isInteger(month) || month < 1 || month > 12) { alert('Введіть ціле число від 1 до 12'); return; }
  let season;
  if (month === 12 || month <= 2) season = 'зима';
  else if (month <= 5) season = 'весна';
  else if (month <= 8) season = 'літо';
  else season = 'осінь';
  alert(names[month - 1] + ' — ' + season);
}
// Завдання 5: градуси Цельсія у Фаренгейти
function fahrenheit() {
  const input = prompt('Температура у градусах Цельсія:');
  if (input === null) return;
  if (input.trim() === '') { alert('Введіть число'); return; }
  const celsius = Number(input.replace(',', '.'));
  if (!Number.isFinite(celsius)) { alert('Некоректна температура'); return; }
  const tf = (9 / 5) * celsius + 32;
  alert(celsius + ' °C = ' + Number(tf.toFixed(2)) + ' °F');
}
// Завдання 6: день тижня, prompt і виведення на сторінку
function weekday() {
  const input = prompt('Введіть номер дня тижня від 1 до 7:');
  if (input === null) return;
  const day = Number(input);
  const days = ['Понеділок','Вівторок','Середа','Четвер','П’ятниця','Субота','Неділя'];
  document.getElementById('weekday-result').textContent = Number.isInteger(day) && day >= 1 && day <= 7 ? days[day - 1] : 'Введіть ціле число від 1 до 7';
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prime-result').textContent = primeNumbers().join(', ');
  document.getElementById('evenodd-result').textContent = evenOdd().join('\n');
  const data = divideNumber();
  document.getElementById('divide-result').textContent = 'result = ' + data.result + '; counter = ' + data.counter + ' (також у консолі)';
  document.getElementById('month-btn').addEventListener('click', monthInfo);
  document.getElementById('temp-btn').addEventListener('click', fahrenheit);
  document.getElementById('weekday-btn').addEventListener('click', weekday);
});
