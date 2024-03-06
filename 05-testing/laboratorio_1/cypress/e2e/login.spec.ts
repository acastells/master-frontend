import * as LoginContainer from '../../src/pods/login/login.api';

describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Act
    cy.visit('/');
    cy.findByRole('textbox', { name: 'Usuario *' }).click();

    // Assert
    cy.findByRole('textbox', { name: 'Usuario *' }).should('have.focus');
  });

  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByRole('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.spy(LoginContainer, 'isValidLogin').as('loginSpy');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
    cy.get('@loginSpy').should('have.been.called');
  });

  it('should navigate when type valid credentials', () => {
    /*
    +   // Arrange
    +   const user = 'admin';
    +   const password = 'test';

    +   // Act
    +   cy.visit('/');
    +   cy.findByLabelText('Name').as('userInput');
    +   cy.findByLabelText('Password').as('passwordInput');

    +   cy.get('@userInput').type(user);
    +   cy.get('@passwordInput').type(password);
    +   cy.findByRole('button', { name: 'Login' }).click();

    +   // Assert
    +   cy.url().should('equal', 'http://localhost:8080/#/hotel-collection');
    */
  });
  
});
