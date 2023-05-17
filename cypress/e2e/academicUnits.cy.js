/* eslint-disable no-undef */
describe('Visiting the app', () => {
  // Arrange
  const baseUrl = 'https://pla-udea-front.vercel.app/'
  it('Se puede visitar la aplicación', () => {
    // Act
    cy.visit(baseUrl)

    // Assert
    cy.get('button').contains('Conectar')
  })

  it('Se puede navegar a la página de unidades académicas', () => {
    // Act
    cy.visit(baseUrl)
    cy.get('button').contains('Conectar').click()

    // Assert
    cy.url().should('include', '/units')
    cy.get('#__next > p').contains('Loading...', { matchCase: false })
    cy.get('h2').contains('Unidades académicas', { matchCase: false })
  })
})
