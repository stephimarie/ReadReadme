const inquirer = require('inquirer');

//  Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message:"What's your project title?",
        name: "title"
    },
    {
        type: "input",
        message:"Please describe your project",
        name: "description"
    },
    {
        type: "input",
        message:"Please describe your project",
        name: "description"
    },
 

  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
  })
  .catch(error => {
    console.log("error: "+error);
  });