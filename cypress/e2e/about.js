describe('about', () => {
  before(() => {
    cy.visit('/')
      .getByText('About me')
      .click()
  })

  it('should be accessible from home page', () => {
    cy.assertRoute('/about')
  })

  it('contains expected content', () => {
    cy.getByText(/hello/i).getByText(/drop me an email/i)
  })

  describe('clicking Home', () => {
    it('leads back to home page', () => {
      cy.getByText('Home')
        .click()
        .assertRoute('/')
    })
  })
})
