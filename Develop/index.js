var inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
var fs = require("fs");

const team = [];



function position(){

  return inquirer.prompt([
    { type: "list",
    message: "Which of the following would you like to add to your team?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "position" 
    }

  ]).then(function(answers){

    if(answers.position === "Engineer"){
      engineer();
     
    }else if(answers.position === "Intern"){
      intern();
     
    }else{
      console.log ("thanks! You have created a team! Check the output folder to view team.")
  console.log(team);
  var jsonTeam = JSON.stringify(team)
  fs.writeFileSync("./output/test.html", jsonTeam);
    }
  })};

  
function manager() {
  return inquirer.prompt([
      {
          type: "input",
          message: "What is the name of your manager?",
          name: "name"
      },
  
  
      {
          type: "input",
          message: "What is their ID?",
          name: "id"
      },
  
      
      {
        type: "input",
        message: "What is their email address?",
        name: "email"
    },
    {
      type: "input",
      message: "What is their office number?",
      name: "officeNumber"
  },
     
  ]).then(function(answers){
  
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
    console.log(manager);
    position();
  })};

function engineer(){
  return inquirer.prompt([
          
    {
      type: "input",
      message: "What is the Engineer's name",
      name: "engineerName"
    },
   {
      type: "input",
      message: "What is the Engineer's ID",
      name: "engineerID"
    },
    {
      type: "input",
      message: "What is the Engineer's Email Adress",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "What is the Engineer's Github Username",
      name: "githubUsername"
    }

]).then(function(answers){
  
const engineer = new Engineer(
  answers.engineerName,
  answers.engineerID,
  answers.engineerEmail,
  answers.githubUsername
);

team.push(engineer);
console.log(engineer);
finish();

})};

function intern(){
  return inquirer.prompt([  
    {
      type: "input",
      message: "What is the Intern's name",
      name: "internName"
    },
   {
      type: "input",
      message: "What is the Intern's ID",
      name: "internID"
    },
    {
      type: "input",
      message: "What is the Intern's Email Address",
      name: "internEmail"
    },
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "internSchool"
    }]).then(function(answers){

      const intern = new Intern(
        answers.internName,
        answers.internID,
        answers.internEmail,
        answers.internSchool
      );
        console.log(intern);
        team.push(intern);
        finish();
    })};

    
    
 
    function finish(){
      position();
    };

    manager();