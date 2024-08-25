describe('Initial Page', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.contains('Escolha com qual usuário irá utilizar a plataforma').should(
      'be.visible'
    );
  });
});
