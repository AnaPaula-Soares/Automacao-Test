
import login from '../pages/login' 
import formulario from '../pages/formulario' 

describe('template spec', () => {

  it('login', () => {

    cy.visit('/login')
    login.loginpassos()
    formulario.forumulariopassos()

  })
})