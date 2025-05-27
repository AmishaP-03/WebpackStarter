// Cannot use ES6 import/export syntax here as webpack.config.js is not a module file by default. They are only supported only in module files.
// import * as path from 'node:path';

const path = require('node:path');

const config = {
    // 1st mandatory property
    // Relative path of file to be loaded foremost while running the application. 
    // Webpack adds the files imported in this entry file before the entry file in the load order.
    // It repeats the same for all the files down the import chain to get the final load order.
    entry: './src/index.js',

    // 2nd mandatory property
    // Tells webpack where to save the resultant bundle.js file and also what to name it
    output: {
        // Absolute path reference where the bundle.js file will be stored.
        // Since webpack runs in node.js, we are using a node.js function 'resolve()' defined in path module to generate this absolute path as per the OS.
        // __dirname -> a constant in node.js which is a refrence to the current working directory.
        // 'dist' -> specifies the folder name to be created in __dirname; will contain the bundle.js file.
        path: path.resolve(__dirname, 'dist'),

        // This name is user defined, however, as per convention, we go with bundle.js
        // Contains code from multiple JS files in correct load order
        filename: 'bundle.js'
    }
};

module.exports = config;