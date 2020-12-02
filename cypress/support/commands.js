import '@percy/cypress';
//require('@cypress/snapshot').register()
const noLog = {log: false}
Cypress.Commands.add("login", (username, password) => {
  const log = Cypress.log({
    name: "login",
    displayName: "LOGIN",
    message: [`🔐 Authenticating with ${username}`],
    // @ts-ignore
    autoEnd: false
  });
  
  cy.server();
  
  if(username != ""){
    cy.get("#inputUserName", noLog).type(username, noLog);
  }
  if(password != "") {
    cy.get("#inputPassword", noLog).type(password, noLog);
  }
  log.end();
  cy.get("#buttonLogin", noLog).click(noLog)
  
  
});

Cypress.Commands.add('loginMessage', ()=> { 
    cy.get('.error', noLog).then(($error) => {
      var text = $error.text()
      var subtext = String(text).substr(59,80)
      cy.log(subtext)
    })    
})

Cypress.Commands.add('Wait', (seconds) => {
  cy.wait(seconds * 1000, noLog)
})