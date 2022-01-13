// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = {
    title: 'What is the title of your project?',
    description: 'Write a description of your project and what it does.',
    installation: 'What command/commands should be used to install dependencies for your application?',
    usage: 'Provide instructions and examples of use for your project.',
    credits: 'List any collaborators or links to any resources you used.',
    license: 'What license would you like to use?',
    tests: 'Write tests for your project, and examples of how to run them.',
    features: 'List the features of your project!',
    github: 'What is your GitHub username?',
    email: 'What is your email address?'
};

const {title, description, installation, usage, credits, license, tests, features, github, email} = questions;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(

        fileName,

        data,

        (err) => err ? console.error(err) : console.log('README generated!'));
    
};

// TODO: Create a function to initialize app
function init() {
    inquirer    
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: title,
        },
        {
            name: 'description',
            type: 'input',
            message: description,
        },
        {
            name: 'installation',
            type: 'input',
            message: installation,
        },
        {
            name: 'usage',
            type: 'input',
            message: usage,
        },
        {
            name: 'credits',
            type: 'input',
            message: credits,
        },
        {
            name: 'license',
            type: 'input',
            message: license,
        },
        {
            name: 'tests',
            type: 'input',
            message: tests,
        },
        {
            name: 'features',
            type: 'input',
            message: features,
        },
        {
            name: 'github',
            type: 'input',
            message: github,
        },
        {
            name: 'email',
            type: 'input',
            message: email,
        },
    ])
    .then((response) => {
        console.log(response);
       const myMarkdown = markdown(response);
       writeToFile('README.md', myMarkdown)
    });
};

// Function call to initialize app
init();
