
import { fakerPT_BR } from '@faker-js/faker'


class formulario {

    forumulariopassos() {
        const nomeSanitizado = (fakerPT_BR.person.fullName() || 'Ana Maria')
            .normalize('NFD')                  // separa acentos
            .replace(/[\u0300-\u036f]/g, '')   // remove acentos
            .replace(/[^A-Za-z\s]/g, ' ')      // remove pontuação/dígitos, mantém letras e espaço
            .replace(/\s+/g, ' ')              // compacta múltiplos espaços
            .trim()
            .slice(0, 255);


        cy.get('h1' , { timeout: 10000 }).should('be.visible').should('have.text', 'Cadastro de Usuário')
        cy.get('#nomeCompleto').type(nomeSanitizado, { delay: 70 });
        //cy.get('#nomeCompleto').type(fakerPT_BR.person.fullName(), { delay: 70 })
        //cy.get('#nomeCompleto').type('Ana Paula Silva', {delay: 70})
        //cy.get('#email').type('anateste01@example.com', {delay: 70})
        cy.get('#email')
            .type(fakerPT_BR.internet.username().toLowerCase() + '+' + Date.now() + '@example.com', { delay: 70 })
        cy.get('#senha', { timeout: 10000 }).should('be.visible').type('SenhaSegura123!', { delay: 70 })
        cy.get('#confirmacaoSenha', { timeout: 10000 }).should('be.visible').type('SenhaSegura123!', { delay: 70 })
        cy.get('#dataNascimento', { timeout: 10000 }).should('be.visible').type('15/05/1990', { delay: 70 })
        cy.get('#generoFeminino', { timeout: 10000 }).should('be.visible').check({ delay: 70 })
        cy.get('#telefone', { timeout: 10000 }).should('be.visible').type('(11) 91234-5678', { delay: 70 })
        cy.get('#pais', { timeout: 10000 }).should('be.visible').select('Brasil', { delay: 70 })
        cy.get('#estado', { timeout: 10000 }).should('be.visible').select('SP', { delay: 70 })
        cy.get('#aceiteTermos', { timeout: 10000 }).should('be.visible').check()
        cy.get('#fotoPerfil', { timeout: 10000 }).should('be.visible').selectFile('cypress/fixtures/tela.png')
        cy.wait(5000)
        cy.get('#btnCadastrar', { timeout: 10000 }).should('be.visible').click({ force: true })
        cy.wait(7000)

        cy.get('#mensagemSucesso', { timeout: 10000 }).should('be.visible').should('have.text', 'Cadastro realizado com sucesso!')
        cy.screenshot('formulario-cadastrado-com-sucesso')


    }

}
export default new formulario