describe('Cadastro - Clt TENDA', () => {
  // Configurações dinâmicas
  const userData = {
    email: 'jeffersonsdlima@gmail.com',
    password: '8H1EAiTrgy*',
    gender: 'Masculino', // Ou 'Feminino'
    birthDate: {
      day: '13',
      month: '03',
      year: '1988'
    },
    address: {
      name: 'Casa',
      zipCode: '14150000',
      street: 'Dirce Morais Deza',
      number: '70',
      district: 'Santa Luzia',
      reference: 'Área Verde'
    }
  }

  // Função para preencher informações pessoais
  const fillPersonalInfo = ({ gender, birthDate }) => {
    cy.get(`.genders-select > :nth-child(${gender === 'Masculino' ? 2 : 1}) > #gender`).click()
    cy.get('[data-cy="inpt-text-day"]').type(birthDate.day)
    cy.get('[data-cy="inpt-text-month"]').type(birthDate.month)
    cy.get('[data-cy="inpt-text-year"]').type(birthDate.year)
  }

  // Função para preencher informações de endereço
  const fillAddress = (address) => {
    cy.get('.col-sm-12 > #name').type(address.name)
    cy.get('#zipCode').type(address.zipCode).click()
    cy.get('#addressLine1').type(address.street)
    cy.get('#number').type(address.number)
    cy.get('#district').type(address.district)
    cy.get('#reference').type(address.reference)
  }

  it('Cadastro', () => {
    // Acessar o site
    cy.visit('https://marketplace-alpha.tendaatacado.com.br')
    cy.get('.ButtonClose > .svgIcon').click()
    cy.get('.disclaimer-container > [data-cy="btn-"]').click()

    // Acessar a página de login
    cy.get('.btn > .IconTextComponent > .IconUser > :nth-child(1) > .svgIcon').click()

    // Realizar login
    cy.get('#login').type(userData.email)
    cy.get('#password').type(userData.password)
    cy.get('.row_action_login > [data-cy="btn-"]').click()

    // Preencher informações pessoais
    fillPersonalInfo(userData)

    // Preencher endereço
    fillAddress(userData.address)

    // Criar a conta
    cy.get('.btn-create-account > [data-cy="btn-"]').click()
    cy.wait(6000)
  })
})
