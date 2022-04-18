const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

teamArray = [];

// const addManager = () => {
//     return inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Manager's name: ",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter a name for the manager!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "Manager's id: ",
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter an id for the manager!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "Manager's email: ",
//             validate: email => {
//                 valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//                 if (valid) {
//                     return true;
//                 } else {
//                     console.log("email invalid!");
//                     return false;
//                 }
//             }
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "Manager's office number: ",
//             validate: officeNumberInput => {
//                 if (officeNumberInput) {
//                     return true;
//                 } else {
//                     console.log("Please enter the manager's office number!");
//                     return false;
//                 }
//             }
//         }
//     ])
//         .then(managerInput => {
//             const  { name, id, email, officeNumber } = managerInput; 
       
//             const manager = new Manager(name, id, email, officeNumber);

//             teamArray.push(manager);
//             console.log(manager);
//         });
// };


const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: 'role',
            message: "Who would you like to add to the team?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee's ID: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee's email: ",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('email invalid!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number: ",
            when: (input) => input.role === 'Manager',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's office number!")
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's github username: ",
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school: ",
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTeam',
            message: 'Finish building team?',
            default: false
        }
    ])
        .then(employeeData => {

            let { name, id, email, role, officeNumber, github, school, confirmTeam } = employeeData;
            let employee;
            if (role === 'Manager') {
                employee = new Manager(name, id, email, officeNumber);
                console.log(employee);
            }
            else if (role === 'Engineer') {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === 'Intern') {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmTeam) {
                return teamArray;            
            } else {
                return addEmployee(teamArray);

            }
        })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile created!")
        }
    })
}; 

addEmployee()
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });