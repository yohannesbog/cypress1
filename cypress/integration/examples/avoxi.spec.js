describe('avoxi cart', () => {

    it('Navigate to avoxi shoping site', () => {
        cy.visit('https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/')
    })

    it('select country', () => {
 
        // cy.wait(3000)
        cy.get('[id="colophon"]').should('be.visible')
        cy.viewport(500, 500)
        cy.get('#menu-item-1397 > a')   
     })
})