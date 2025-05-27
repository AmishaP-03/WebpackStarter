# WebpackStarter
A starter project to see webpack in action

1. Create a new npm project

        npm init
- Creates a project with only 1 file i.e package.json file.
- package.json files contains:
    - Dependencies used in our project
    - Scripts to build and execute our project

2. Create JS modules

- Create a `src` folder. This would segregate the core logic from other configuration/setup files.
- Create 2 JS files in that `src` folder: `index.js`, `sum.js`
- `index.js` will be using the functions from `sum.js` hence it is should be loaded first.
- Syntax to link JS files as per the module system:

    <img src="./lectureAssests/moduleSystem.png" alt="Module System">

3. Install and configure webpack

        npm install --save-dev webpack

- Installs webpack
- webpack.config.js 
    - File that lets us customize the behaviour of webpack
    - While running, webpack looks for a file with exact this name to fetch the custom configurations.
    - Webpack runs in node.js environment. Hence, we use a node.js helper function to fetch the absolute path for storing the output file.

4. Run webpack
