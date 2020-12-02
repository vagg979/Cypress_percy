
describe('Login test cases', function () {
    before(() => {
        cy.fixture('testValues').then(function (data) {
            this.data = data;
        })
    })
    beforeEach(() => {
        cy.visit('#!/login', { log: false })  ///ASMSspecialist/#!/login
    })
    it('Login success', function () {
        cy.login("e1", "123")
        cy.Wait(3)
        cy.url().should('contain', '#!/home/items/-1/list')
        cy.percySnapshot('login success')
    });

    it('IncorrectPassword', () => {
        cy.login("e1", "***")
        cy.loginMessage()
        cy.percySnapshot("pass")
    })

    it('IncorrectUser', () => {
        cy.login("e22", "123")
        cy.loginMessage()
        cy.percySnapshot('incorrectUser')
    })

    it('notUser', () => {
        cy.login("", "123")
    })

    it('changeTypeAuthentication', () => {
        cy.get('.k-input > .ng-binding').click()
        cy.get('[data-offset-index="1"] > .ng-binding').click()
        cy.pause()
        cy.login("victor.garcia", this.data.Pass)
        cy.percySnapshot('loginInterseq')
    })
})