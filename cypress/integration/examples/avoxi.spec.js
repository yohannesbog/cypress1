describe('avoxi cart', () => {

    it('testproject site', () => {
        cy.visit('https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/')
        cy.title().should('eq', 'Javascript Testing with Selenium Webdriver and Mocha - TestProject')

    })

    it('Scroll to the bootom of the page and select ', () => {
        // cy.wait(3000)
        cy.get('[id="colophon"]').should('be.visible')
        // cy.viewport(500, 500)
        // cy.wait(3000)
        cy.get('#menu-item-1397 > a')
        cy.get('.block-bg-overlay').click()
        cy.get('#menu-item-4866 > a').click()
    })

    it('Go to link and provide personal info', () => {
        cy.visit('https://app.testproject.io/signup/')
        cy.get('[id="email"]').type('yohannes11@gmail.com')
        cy.get('[id="company"]').type('Avoxi')
        cy.get('[id="first-name"]').type('Avoxi')
        cy.get('[id="last-name"]').type('Avoxi')
     })
     //inter password
     it('Enter my password', () => {
        cy.get('#password').type('Ab123456')
        cy.get('#confirm-password').type('Ab123456')
        cy.get('.tp-checkbox-input-view')
     })

     it('Click on agreement chheckbox', () => {
        cy.get('.tp-checkbox-input-view').click()
     })
      
     it ('Click on sign up button', () => {
        // cy.get('#tp-sign-up').click()
     })
})