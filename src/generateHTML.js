// manager card 
const generateManager = function (manager) {
    return `
  <div class="card">
    <div class="card-body">
        <h3 class="card-title">${manager.name}</h3>
        <p class="card-text"><i class="material-icons">person</i> Manager</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>
  `;
};

// engineer card
const generateEngineer = function (engineer) {
    return `
  <div class="card">
    <div class="card-body">
        <h3 class="card-title">${engineer.name}</h3>
        <p class="card-text"><i class="material-icons">computer</i> Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
</div>
`;
};

// intern card
const generateIntern = function (intern) {
    return `
  <div class="card">
    <div class="card-body">
        <h3 class="card-title">${intern.name}</h3>
        <p class="card-text"><i class="material-icons">school</i> Intern</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
  `;
};

// html page
const generatePage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="/dist/style.css">
  </head>
  
  <body>
      <nav class="navbar">
          <div class="container justify-content-center">
              <span class="navbar-brand m-0 h1">My Team</span>
          </div>
      </nav>
      <main>
          <div class="card-deck">
              ${employeeCards} 
          </div>
      </main>
  </body>
  
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"></script>
  
  </html>              
`;
}

generateHTML = (data) => {

    // array for cards 
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];

        switch (employee.getRole()) {
            case 'Manager':
                const managerCard = generateManager(employee);

                pageArray.push(managerCard);
        break;

        // call engineer function
        case 'Engineer':
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        break;

        // call intern function 
        case 'Intern':
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
            break;
        }
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateProfiles = generatePage(employeeCards);
    return generateProfiles;

}


module.exports = generateHTML;