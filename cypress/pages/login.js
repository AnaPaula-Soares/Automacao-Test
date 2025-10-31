

class login {

    loginpassos(){
        cy.get('#email', { timeout: 10000 }).should('be.visible').type('teste@gmail.com' , {delay: 100})
        cy.get('#senha' , { timeout: 10000 }).should('be.visible').type('1234', {delay: 100})
        cy.get('#btnAcessar' , { timeout: 10000 }).should('be.visible').click() 
        cy.wait(2000)

        cy.get('#mensagemSucesso', { timeout: 10000 }).should('be.visible').should('have.text', 'Login realizado com sucesso! Redirecionando...')
        cy.wait(2000)
        cy.screenshot('formulario-acessado -com-sucesso')
        cy.wait(2000)
        
    }

}
export default new login