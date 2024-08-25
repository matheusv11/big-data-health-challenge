describe('Products Page', () => {
  // before(() => {
  //   cy.visit('http://localhost:3000/');

  //   cy.contains('Escolha com qual usuário irá utilizar a plataforma').should(
  //     'be.visible'
  //   );

  //   cy.get('[data-testid="user-card"]').should('be.visible').first().click();
  // });

  it('should navigate to the products page', () => {
    cy.homepage();
    cy.contains('Seja bem vindo').should('be.visible');
  });

  it('should show a product', () => {
    cy.homepage();
    cy.get('[data-testid="product"]').should('be.visible').first();
  });

  it('should add a product to cart', () => {
    cy.homepage();
    cy.get('[data-testid="add-cart-btn"]').should('be.visible').first().click();
    cy.get('[data-testid="added-cart-btn"]').should('be.visible').first();
  });

  it('should remove a product from cart', () => {
    cy.homepage();
    cy.get('[data-testid="add-cart-btn"]').should('be.visible').first().click();
    cy.get('[data-testid="added-cart-btn"]').should('be.visible').first();

    cy.get('[data-testid="cart-btn"]').should('be.visible').click();

    cy.get('[data-testid="remove-product-btn"]')
      .should('be.visible')
      .first()
      .click();

    cy.get('[data-testid="remove-product-btn"]').should('not.exist');
  });

  it('should view a product detail', () => {
    cy.homepage();

    cy.get('[data-testid="product"]').should('be.visible').first().click();
    cy.get('[data-testid="product-detail"]').should('be.visible');
  });
});
