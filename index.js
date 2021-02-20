const inquirer = require('inquirer');
const axios = require("axios");
const fs = require('fs');

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
        message:"What's your table of contents?",
        name: "tableOfContents"
    },
    {
        type: "input",
        message:"What's your GitHub username?",
        name: "username"
    }
 

  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers);
    axios.get(`https://api.github.com/users/${answers.username}`).then( function(response) {
        console.log(response);

        const readme = `
        # ${answers.title}
        
        `;

        fs.writeFile("ReadMe.md", readme, (err) => {
            if(err) {
                console.log("err: "+err);
            }else {
                console.log("ReadMe.md was successfully created");
            }
        })
    })
  })
  .catch(error => {
    console.log("error: "+error);
  });