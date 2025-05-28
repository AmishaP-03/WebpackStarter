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
    },

    // Module loader property -> Tells webpack to pre-process the files before bundling them.
    // This is an optional property, but it is used to specify how different types of files should be processed.
    module: {
        // Each loader is added as a ruleset in this rules array
        rules: [
            {
                // Tells webpack to run babel-loader to transpile the JS files
                use: 'babel-loader', 

                // Test property is a regex to match the files to be processed by this loader
                // In this case, we want to apply babel to only JS files (and not CSS files or images etc)
                test: /\.js$/,
            },
            {
                // style-loader injects CSS into the DOM, css-loader interprets @import and url() like import/require() and will resolve them.
                // The order of loaders is important; they are applied from right to left.
                // Here, css-loader is applied first to process the CSS files, and then style-loader is applied to inject the processed CSS into the DOM.
                use: ['style-loader', 'css-loader'], 

                // This rule applies to all CSS files
                test: /\.css$/ 
            }

        ]
    }
};

module.exports = config;