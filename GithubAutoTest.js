it('github test', function() {

  cy.visit('https://github.com')
  cy.get('div.d-flex.flex-justify-between > .d-flex > .js-details-target > .octicon').click()
  cy.get('.mr-3 > .HeaderMenu-link').click()
  cy.get('#login_field').type('danielslad@gmail.com')
  cy.get('#password').type('Daniel1987##')
  cy.get('.btn').click()
  cy.wait(4000)
  cy.get('.mr-0.d-none > .details-overlay > .Header-link').click()
  cy.get('[href="/Daniel1987Daniel?tab=repositories"]').click()
  cy.get(':nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a').click()

})
