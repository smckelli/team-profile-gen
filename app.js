const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");


const team = [];


function warning() {
    inquirer.prompt([
        {
            type: "list",
            name: "stopGo",
            message: "You are entering a classified system. Are yousure you want to do this?",
            choices: ["Yes, but that guy is looking at me funny.", "Nope, I'm outta here."]
        }
    ])
    .then (function(data) {

        switch(data.stopGo) {
            case "Yes, but that guy is looking at me funny.":
                team.push("Placeholder")
                // console.log(team);
                addTeam();
                break;

            case "Nope, I'm outta here.":
                console.log("Good choice.");
        }

    });
};

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addTeamMate",
            message: "Are you adding to the A Team?",
            choices: ["Yes, add a Manager!", "Yes, add an Engineer!", "Yes, add an Intern!", "No, we are currently recruiting."],
        }
    ])
    .then(function(data) {

        switch (data.addTeamMate) {
            case "Yes, add a Manager!":
                // console.log("Manager!");
                role = "Manager"
                addManager();
                break;
            
            case "Yes, add an Engineer!":
                // console.log("Engineer!");
                addEngineer();
                break;

            case "Yes, add an Intern!":
                // console.log("Intern!");
                addIntern();
                break;

            case "No, we are currently recruiting.":
                // console.log("No thanks!");
                assembleTeam();
                break;
        }

    });
};

function addManager() {
    inquirer.prompt([
        // {
        //     type: "list",
        //     name: "title"
        //     message:
        // }
        {
            type: "text",
            name: "name",
            message: "What's the boss's name?",
        },
        {
            type: "text",
            name: "email",
            message: "What's the boss's email address?",
        },
        {
            type: "text",
            name: "officeNumber",
            message: "What's the boss's office number?",
        },
        {
            type: "list",
            name: "title",
            message: "Is the information you entered correct?",
            choices: [
                "yes",
                "no"
            ]
        }
    ])
    .then(function(data) {
        const name = data.name
        if (team.title = "yes") {
            team.title = "Manager"
        } else {
            addManager();
        }
        console.log(team.title)
        const id = team.length
        console.log(team.length)
        const email = data.email
        const office = data.office
        const teamMate = new Manager(name, id, email, office)
        team.push(teamMate)
        addTeam();
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Who is your engineer?",
        },
        {
            type: "text",
            name: "email",
            message: "What's your engineer's email address?",
        },
        {
            type: "text",
            name: "github",
            message: "What's your engineer's github username?",
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = team.length
        console.log(team.length)
        const email = data.email
        const github = data.github
        const teamMate = new Engineer(name, id, email, github)
        team.push(teamMate)
        addTeam();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            type: "text",
            name: "name",
            message: "Who is your intern?",
        },
        {
            type: "text",
            name: "email",
            message: "What's your intern's email address?",
        },
        {
            type: "text",
            name: "school",
            message: "Where did your intern go to school?",
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = team.length
        console.log(team.length)
        const email = data.email
        const school = data.school
        const teamMate = new Intern(name, id, email, school)
        team.push(teamMate)
        addTeam();
    });
};

// function assembleTeam() {

//     const pageArray = []
//     const mainHTML = `
//     <!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <!-- CSS only -->
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
//             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//         <title>The A Team</title>
//     </head>
    
//     <body>
//         <nav class="navbar navbar-dark bg-danger mb-5">
//             <span class="navbar-brand mb-0 h1 w-100 p-4 text-center">The A Team Profile</span>
//         </nav>
//         <div class = "container-md row mx-auto">
//     `
//     assembleTeam.push(mainHTML);

//     for (let i = 1; i < team.length; i++) {
//         let card = `
//         <div class = "col-4">
//             <div class="card mb-3" style="width: 18rem;">
//                 <strong class="card-header bg-warning p-3 text-center">
//                 ${team.name}<br/>Engineer<br/>
//                 </strong>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">ID : ${id}</li>
//                     <li class="list-group-item">Email Address: ${email}</li>
//         `
//     }

// function startHTML() {
//     const html = `<!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <!-- CSS only -->
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
//             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//         <title>The A Team</title>
//     </head>
    
//     <body>
//         <nav class="navbar navbar-dark bg-danger mb-5">
//             <span class="navbar-brand mb-0 h1 w-100 p-4 text-center">The A Team Profile</span>
//         </nav>
//         <div class = "container-md row mx-auto">`
// }


// function addHtml(member) {
//                 let data = "";
//                 if (role === "Engineer") {
//                     const gitHub = member.getGithub();
//                     data = `<div class = "col-4">
//                 <div class="card mb-3" style="width: 18rem;">
//                     <strong class="card-header bg-warning p-3 text-center">
//                     ${name}<br/>Engineer<br/>
//                     </strong>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID : ${id}</li>
//                         <li class="list-group-item">Email Address: ${email}</li>
//                         <li class="list-group-item">Github username: ${github}</li>
//                     </ul>
//                 </div>
//             </div>`;
//                 } else if (role === "Intern") {
//                     const gitHub = member.getSchool();
//                     data = `<div class = "col-4">
//                     <div class="card mb-3" style="width: 18rem;">
//                     <strong class="card-header bg-warning p-3 text-center">
//                     ${name}<br/>Engineer<br/>
//                     </strong>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID : ${id}</li>
//                         <li class="list-group-item">Email Address: ${email}</li>
//                         <li class="list-group-item">Github username: ${school}</li>
//                     </ul>
//                 </div>
//             </div>`;
//                 } else if (role === "Manager") {
//                     const gitHub = member.getOffice();
//                     data = `<div class = "col-4">
//                 <div class="card mb-3" style="width: 18rem;">
//                     <strong class="card-header bg-warning p-3 text-center">
//                     ${name}<br/>Engineer<br/>
//                     </strong>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">ID : ${id}</li>
//                         <li class="list-group-item">Email Address: ${email}</li>
//                         <li class="list-group-item">Github username: ${office}</li>
//                     </ul>
//                 </div>
//             </div>`;
//             }
//             fs.appendFile("./generated/team.html", data, function (err) {
//                 if (err) {
//                     return reject(err);
//                 };
//                 return resolve();
//             })
// }

// function endHTML() {
//     const html = `    </div>
//     </body>
    
//     </html>`;
//     fs.appendFile("./generated/team.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         };
//     });
// }

warning();
