// manager card

const managerCard = function (manager) {
  return ` 
  <div class="card-name">

  `
}

// engineer card


// intern card 

// html page

const htmlPage = function (cards) {
  console.log(cards)
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
  <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
   </div>
  </header>
  <main>
      <!-- ${cards} -->
  </main>
 
</body>
</html>
`;
}

module.exports = generateHtmlPage

