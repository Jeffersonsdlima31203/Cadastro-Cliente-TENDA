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

    cy.get('#cep').type('14150000')
    cy.contains('Enviar').click()
    cy.wait(2000)
    cy.contains('Delivery').click()
    cy.get(':nth-child(4) > .CarouselProductsContainer > .slick-slider > .slick-list > .slick-track > [data-index="1"] > :nth-child(1) > .ProductCardShowcase > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click()

    cy.wait(2000)
    cy.get('.hot-link-name').click()
    cy.wait(2000)

    cy.get(':nth-child(2) > .showcase-card-content > .showcase-image-area > .capsule-img-top > .card-img-top').click({force: true})
    cy.wait(2000)

    cy.get('.ButtonBuyComponent > [data-cy="btn-"]').click()



    

    
  })
})