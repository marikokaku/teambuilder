const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const team = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name for the manager!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's id",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an id for the manager!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.",
            validate: emailInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                if (valid) {
                    return true;
                } else {
                    console.log("email invalid!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!");
                    return false;
                }
            }
        }
    ])
    .then(managerInfo => {
        const {name, id, email, officeNumber} = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        team.push(manager); 
        console.log(`
        ==============
        Manager added!
        ==============
        `);
    })
};

function addEmployee () {
    inquirer.prompt ([
        {
            type: "list",
            message: 
        }
    ])
}

const employeePrompt = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Who would you like to add to the team?",
            choices: ['Add Engineer', 'Add Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee name: ", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee ID: ",
            validate: nameInput => {
                if  (nameInput) {
                    console.log ("Please enter the employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's github username: ",
            when: (input) => input.role === "Add Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school: ",
            when: (input) => input.role === "Add Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmFinishBuild',
            message: 'Are you done building your team?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, finishTeam } = employeeData; 
        let employee; 

        console.log(employeeData, "employee data")
        if (role === "Add Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Add Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        team.push(employee); 
       console.log(team, "team employee")
        if (confirmAddEmployee) {
            return addEmployee(); 
        } else {
            return team;
        }
    })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team Profile has been successfully created!")
        }
    })
}; 

managerPrompt()
  .then(employeePrompt)
  .then(response => {
    return generateHTML(team);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });

// create a function that prompts user for manager information
// then take answers and use manager lib/ model to create manager element
// then push manager element to 'team' array
// then have function to prompt user for another team member OR finish
// then have switch statement to either invoke create Eng or Intern function
// then prompt user for Eng/ Intern information
// then take answers and use Eng/ Intern lib/ model to create team member
// then push team member to team array
// then re-run function to prompt user for another team member or finish

// switch('takes string or variable ... like "Engineer"') {
//     case "Engineer":
//         newEngineer();
//         break;
//     case "Intern":
//         newIntern();
//         break;
//     default:
//         createTeam();
// }

// function newEngineer {

// }

// function newIntern {
    
// }