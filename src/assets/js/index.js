// import css to be picked up by webpack
import '../css/style.css';

// import images to be picked up by webpack
// import Bey from '../img/bey.jpg'; // <-- if to be used in JS code
import '../img/bey.jpg';

import leftPad from './leftpad';

const numbers = [6934, 23111, 23114, 1001, 211161];
const partListItems = numbers.reduce(
  (acc, element) => acc += `<li>${leftPad(element, 8, '0')}</li>`, ''
);

// If injected at the head
// document.addEventListener('DOMContentLoaded', () => {
//   const partListEl = document.getElementById('numbers');
//   partListEl.innerHTML = partListItems;
// });

const partListEl = document.getElementById('numbers');
partListEl.innerHTML = partListItems;
