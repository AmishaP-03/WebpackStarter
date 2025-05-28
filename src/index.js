// ES6 syntax:
import { getSum } from './sum.js';

// Linking the image-viewer.js file here
import './image-viewer.js';

// Common JS syntax:
// const getSum = require('./sum.js');

const sum = getSum(5, 10);
console.log(`The sum of 5 and 10 is: ${sum}`);