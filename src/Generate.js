// Generates core HTML
function generate(team) {
  return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">
            
            
                <link rel="stylesheet" href="./style.css" />
            <title>Team Data Base</title>
        </head>
        <header class="display text-center p-4 bg-danger text-light">
            <h1>My Team</h1>
        </header>
        <br>
        <body class = "d-flex flex-column bg-secondary">
            <main>
            <div class="container text-center">
                <div class="row justify-content-center">
                    
        
                    <!-- Team Card Section -->
                    ${generateTeam(team)}
        
                </div>
            </div>
            </main>
        </body>
    </html>`;
}

// Generates cards that display team's basic info
function generateTeam(team) {
  const cards = [];

  for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const role = teamMember.role;

    if (role === "Manager") {
      const manager = managerCard(teamMember);
      cards.push(manager);
    }

    if (role === "Engineer") {
      const engineer = engineerCard(teamMember);
      cards.push(engineer);
    }

    if (role === "Intern") {
      const intern = internCard(teamMember);
      cards.push(intern);
    }
  }
  const teamCards = cards.join("");
  return teamCards;
}

// Generates card that displays manager's basic info
function managerCard(manager) {
  return `
    <div class="col-3">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Team Manager</div>
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office Number: ${manager.officeNumber} </p>
            </div>
        </div>
    </div>    
`;
}
// Generates card that displays intern's basic info
function internCard(intern) {
  return `
    <div class="col-3">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Intern</div>
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text">School: ${intern.school} </p>
            </div>
        </div>    
    </div>
    `;
}

// Generates card that displays engineer's basic info
function engineerCard(engineer) {
  return `
  <div class="col-3">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">Engineer</div>
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                <p class="card-text">GitHub: <a target = 'blank' href= "https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`;
}
module.exports = generate;
