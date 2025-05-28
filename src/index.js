// ES6 syntax:
import { getSum } from './sum.js';

// Common JS syntax:
// const getSum = require('./sum.js');

// Linking the image-viewer.js file here
import './image-viewer.js';
import './styles/index.css';

const sum = getSum(5, 10);
const number = document.createElement('p');
number.innerHTML = sum;

document.body.appendChild(number);
console.log(`The sum of 5 and 10 is: ${sum}`);