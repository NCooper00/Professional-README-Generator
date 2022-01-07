// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = {
    title: 'What is the title of your project?',
    description: 'Write a description of your project and what it does.',
    installation: 'Give instructions on how to install or use the application you created.',
    usage: 'Provide instructions and examples of use for your project.',
    credits: 'List any collaborators or links to any resources you used.',
    tests: 'Write tests for your project, and examples of how to run them.',
    features: 'List the features of your project!',
    github: 'What is your GitHub username?',
    email: 'What is your email address?'
};

const {title, description, installation, usage, credits, tests, features, github, email} = questions;

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
        console.log(response)

    fs.writeFile(

'README.md',

`# ${response.title}

## Description
        
${response.description}
        
## Table of Contents
        
Listed below are shortcuts to different parts of the README.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [License](#liscense)
- [Features](#features)
- [Questions](#questions)
        
## Installation
        
${response.installation}
        
## Usage
        
${response.usage}
        
## Credits
        
${response.credits}
        
## Tests 
        
${response.tests}
        
## Features
        
${response.features}

## Questions

GitHub Username: ${response.github}
https://github.com/${response.github}

You can contact me with this email address!
Email Address: ${response.email}
`,

        (err) => err ? console.error(err) : console.log('README generated!'));
    });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(

        'fileName',

        `data`,

        (err) => err ? console.error(err) : console.log('README generated!'));
    
};

// TODO: Create a function to initialize app
function init() {
    const questions = {
        title: 'What is the title of your project?',
        description: 'Write a description of your project and what it does.',
        installation: 'Give instructions on how to install or use the application you created.',
        usage: 'Provide instructions and examples of use for your project.',
        credits: 'List any collaborators or links to any resources you used.',
        tests: 'Write tests for your project, and examples of how to run them.',
        features: 'List the features of your project!'
    };

    const {title, description, installation, usage, credits, tests, features} = questions;
}

// Function call to initialize app
init();
