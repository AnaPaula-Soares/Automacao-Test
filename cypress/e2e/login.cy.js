
import login from '../pages/login' 

describe('template spec', () => {

  it('login', () => {

    cy.visit('/login')
    login.loginpassos()

  })
})