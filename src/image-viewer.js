import './styles/image-viewer.css';

// Importing the image files to makes sure they are processed by webpack
import largeImage from './assets/large.jpg'; // largeImage stores the path to the image file in dist/images/[hash].jpg as it is larger than 40KB
import smallImage from './assets/small.png'; // smallImage stores the raw data of the image(base64 string as seen in bundle.js) as it is less than 40KB

const imageL = document.createElement('img');
imageL.src = largeImage;

// Append it to the DOM tree
document.body.appendChild(imageL);

const imageS = document.createElement('img');
imageS.src = smallImage;
document.body.appendChild(imageS);