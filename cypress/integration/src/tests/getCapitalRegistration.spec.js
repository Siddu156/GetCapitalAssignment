/// <reference types="Cypress" />
describe('GetCapital Assignment', () => {

    beforeEach('Navigation to GetCapital Page', () => {
        cy.visit(Cypress.env("host"))
    })

     it('Happy Path-Search Page Validation', () => { 
       cy.get('.jss105 > .MuiSvgIcon-root').should('have.text','GetCapital')
       cy.clickSearchbox()
       cy.enterBusinessName('box brand')
       cy.get('[data-testid=search]').click()
       cy.get('[data-testid=tbDataRow-21601840331] > :nth-child(2)').click()
       cy.get('.MuiGrid-spacing-xs-2 > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiPaper-root').should('contain','This business is eligible')
       cy.get('[data-testid=stepSubmit] > .MuiButton-label').should('not.be.disabled')
       cy.get('[data-testid=stepSubmit] > .MuiButton-label').click()
           cy.request('POST','https://dc.services.visualstudio.com/v2/track')
             .then((response) => {
              expect(response.status).to.eql(200)
             })
     })

     it('Error Path-Search Page Validation', () =>{
        cy.get('.jss105 > .MuiSvgIcon-root').should('have.text','GetCapital')
        cy.clickSearchbox()
        cy.enterBusinessName('!@@s')
        cy.request('https://preprod-app.getcapital.com.au/abnasicsearch/api/v1/business/!%40%40s')
        .then((response) => {
            expect(response.status).to.eql(200)
        })
        cy.get('[data-testid=search]').click()
        cy.get('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root').should('contain','No business found')
     })
})
