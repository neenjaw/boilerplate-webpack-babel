import leftPad from './leftpad';

const numbers = [6934, 23111, 23114, 1001, 211161];
const partListItems = numbers.reduce(
  (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
);

document.addEventListener('DOMContentLoaded', () => {
  const partListEl = document.getElementById('numbers');
  partListEl.innerHTML = partListItems;
});
