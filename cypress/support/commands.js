// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});

Cypress.on('fail', (error, runnable) => {
  debugger

  // we now have access to the err instance
  // and the mocha runnable this failed on

  throw error // throw error to have test still fail
})

Cypress.Commands.add('clickSearchbox',() => {
  cy.get('#text-autosuggest').click({
    force:true
})
cy.wait(4000)
})

Cypress.Commands.add('enterBusinessName', (bname) => {
  cy.get('#text-autosuggest').type(bname)
        cy.wait(4000)
})

