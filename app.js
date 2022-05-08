const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const employees = [];


function initApp() {
    startHTML();
    add2Team();
}


function add2Team() {
    inquirer.prompt([{
                type: "text",
                name: "name",
                message: "Who are you adding to the team?"
            },
            {
                type: "list",
                name: "role",
                message: "What is this person's role?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                ],
            },
            {
                type: "text",
                name: "id",
                message: "Enter this person's emplyee ID"

            },
            {
                type: "text",
                name: "email",
                message: "What is this person's email?",
            }
        ])
        .then(function ({
            name,
            role,
            id,
            email
        }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "Github username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else if (role === "Manager") {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                        type: "text",
                        message: `Enter this person's ${roleInfo}`,
                        name: "roleInfo"
                    },
                    {
                        type: "list",
                        name: "addTeam",
                        message: "Do you want to add more people to the team?",
                        choices: [
                            "yes",
                            "no"
                        ],
                    }
                ])
                .then(function ({
                    roleInfo,
                    addTeam
                }) {
                    let newTeammate;
                    if (role === "Engineer") {
                        newTeammate = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newTeammate = new Intern(name, id, email, roleInfo);
                    } else if (role === "Manager") {
                        newTeammate = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newTeammate);


                    // .then(function () {
                    // if (addTeam === "yes") {
                    //     add2Team();
                    // } else {
                    //     endHTML();
                    // }
                })
            })
        }


function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>The A Team</title>
    </head>
    
    <body>
        <nav class="navbar navbar-dark bg-danger mb-5">
            <span class="navbar-brand mb-0 h1 w-100 p-4 text-center">The A Team Profile</span>
        </nav>
        <div class = "container-md row mx-auto">`
    fs.writeFile("./generated/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}


function addHtml(member) {
    return new Promise(function (resolve, reject) {
                const name = member.getName();
                const role = member.getRole();
                const id = member.getId();
                const email = member.getEmail();
                let data = "";
                if (role === "Engineer") {
                    const gitHub = member.getGithub();
                    data = `<div class = "col-4">
                <div class="card mb-3" style="width: 18rem;">
                    <strong class="card-header bg-warning p-3 text-center">
                    ${name}<br/>Engineer<br/>
                    </strong>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID : ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">Github username: ${github}</li>
                    </ul>
                </div>
            </div>`;
                } else if (role === "Intern") {
                    const gitHub = member.getSchool();
                    data = `<div class = "col-4">
                    <div class="card mb-3" style="width: 18rem;">
                    <strong class="card-header bg-warning p-3 text-center">
                    ${name}<br/>Engineer<br/>
                    </strong>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID : ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">Github username: ${school}</li>
                    </ul>
                </div>
            </div>`;
                } else if (role === "Manager") {
                    const gitHub = member.getOffice();
                    data = `<div class = "col-4">
                <div class="card mb-3" style="width: 18rem;">
                    <strong class="card-header bg-warning p-3 text-center">
                    ${name}<br/>Engineer<br/>
                    </strong>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID : ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">Github username: ${office}</li>
                    </ul>
                </div>
            </div>`;
            }
            fs.appendFile("./generated/team.html", data, function (err) {
                if (err) {
                    return reject(err);
                };
                return resolve();
            })
})};

function endHTML() {
    const html = `    </div>
    </body>
    
    </html>`;
    fs.appendFile("./generated/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}

initApp();
