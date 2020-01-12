var inquirer = require("inquirer");
var fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
return inquirer.prompt([
    {
        type: "input",
        message: "What is the name of your manager?",
        name: "names"
    },

    // {
    //     type: "input",
    //     message: "What is your ID?",
    //     name: "id"
    // },

    


    {   type: "list",
        message: "Which of the following would you like to add to your team?",
        choices: ["Engineer", "Intern"],
        name: "position"
        
    }
   
]).then(function(response){

    // if(response.position === "Manager"){

    //     inquirer.prompt([{
    //         type: "input",
    //         message: "What is you office number?",
    //         name: "officeNumber"
    //     }])

        
    
    if(response.position === "Engineer"){
        return inquirer.prompt([{
            type: "input",
            message: "What is your Github Username?",
            name: "githubUsername"
        }])

}else{
    return inquirer.prompt([{
        type: "input",
        message: "What school do you go to?",
        name: "schoolName"
    }])
}})};







function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.names}</h1>
      <p class="lead">I am from ${answers.position}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.githubUsername}</li>
        <li class="list-group-item">LinkedIn: ${answers.schoolName}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  
  async function init() {
    console.log("hi")
    try {
      const answers = await promptUser();
  
      const html = generateHTML(answers);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  