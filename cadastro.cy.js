describe('Acesso ao site', () => {
  it('Cadastro', () => {
    cy.visit('https://marketplace-alpha.tendaatacado.com.br')
    cy.get('.ButtonClose > .svgIcon').click()
    cy.get('.disclaimer-container > [data-cy="btn-"]').click()
    cy.get('.btn > .IconTextComponent > .IconUser > :nth-child(1) > .svgIcon').click()

    cy.get('#login').type('jeffersonsdlima@gmail.com')
    cy.get('#password').type('8H1EAiTrgy*')
    cy.get('.row_action_login > [data-cy="btn-"]').click()
    cy.get('.genders-select > :nth-child(2) > #gender').click()
    cy.get('[data-cy="inpt-text-day"]').type('13')
    cy.get('[data-cy="inpt-text-month"]').type('03')
    cy.get('[data-cy="inpt-text-year"]').type('1988')

    cy.get('.col-sm-12 > #name').type('Casa')
    cy.get('#zipCode').type('14150000').click()
    cy.get('#addressLine1').type('Dirce Morais Deza')
    cy.get('#number').type('70')
    cy.get('#district').type('Santa Luzia')
    cy.get('#reference').type('Area Verde')

    cy.get('.btn-create-account > [data-cy="btn-"]').click()
    cy.wait(6000)





    

    
  })
})
