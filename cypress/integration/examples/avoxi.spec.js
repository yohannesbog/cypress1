describe('avoxi cart', () => {

    it('testproject site', () => {
        cy.visit('https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/')
    })

    it('scroll to the bootom of the page and select ', () => {
 
        // cy.wait(3000)
        cy.get('[id="colophon"]').should('be.visible')
        // cy.viewport(500, 500)
        cy.wait(3000)

        cy.get('#menu-item-1397 > a')
        cy.get('.block-bg-overlay').click()
        cy.get('#menu-item-4866 > a').click()
        // cy.get('.header > .container > .row > .col-md-8 > .header__hero-btns > .button-orange').click()
    })

    it('got to link and provide personal info', () => {
         cy.visit('https://app.testproject.io/signup/')
        cy.get('[id="email"]').type('yohannes@gmail.com')
        cy.get('[id="company"]').type('Avoxi')
        cy.get('[id="first-name"]').type('Avoxi')
        cy.get('[id="last-name"]').type('Avoxi')
     })
})