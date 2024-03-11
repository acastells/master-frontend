describe('Project list specs', () => {
  it('should display a list of projects', () => {
    // Act
    cy.visit('/projects');

    // Assert
    cy.findByRole('table').within(() => {
      // first row is thead, the rest is tbody
      cy.findAllByRole('row').should('have.length.greaterThan', 1);
    });
  });

  it('should filter projects by name when search bar is used', () => {
    // Arrange
    const filterProjectToSearch = 'Mapfre';

    // Act
    cy.visit('/projects');
    cy.findByLabelText('Buscar proyecto').as('filterProject');

    cy.get('@filterProject').type(filterProjectToSearch);

    // Assert
    cy.findByRole('table').within(() => {
      cy.findByRole('row', { name: filterProjectToSearch });
    });
  });

  it('should navigate to create page if button clicked', () => {
    // Act
    cy.visit('/projects');
    cy.findByRole('button', { name: /NUEVO PROYECTO/i }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/projects/0');
  });

  it('should navigate to edit page if edit button of third project is clicked', () => {
    // Act
    cy.visit('/projects');
    cy.findByRole('table').within(() => {
      cy.findAllByRole('button', { name: 'Edit project' }).then(
        ($editButtons) => {
          $editButtons[2].click();
        }
      );
    });

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/projects/3');
  });

  it('should delete project if delete button and modal of third project is clicked and then confirmed', () => {
    // Arrange
    let projectNameDeleted = null;

    // Act
    cy.visit('/projects');
    cy.findByRole('table').as('projectTable');

    cy.get('@projectTable').within(() => {
      cy.findAllByRole('button', { name: 'Delete project' }).then(
        ($deleteButtons) => {
          projectNameDeleted =
            $deleteButtons[2].parentElement.parentElement.ariaLabel;
          $deleteButtons[2].click();
        }
      );
    });

    cy.findByRole('dialog', { name: /Eliminar Proyecto/i }).within(() => {
      cy.findByRole('button', { name: /ACEPTAR/i }).click();
    });

    // Assert
    cy.get('@projectTable').within(() => {
      cy.findByRole('row', { name: projectNameDeleted }).should('not.exist');
    });
  });

  it('should keep project if delete button and modal of third project is clicked and then cancelled', () => {
    // Arrange
    let projectNameDeleted = null;

    // Act
    cy.visit('/projects');
    cy.findByRole('table').as('projectTable');

    cy.get('@projectTable').within(() => {
      cy.findAllByRole('button', { name: 'Delete project' }).then(
        ($deleteButtons) => {
          projectNameDeleted =
            $deleteButtons[2].parentElement.parentElement.ariaLabel;
          $deleteButtons[2].click();
        }
      );
    });

    cy.findByRole('dialog', { name: /Eliminar Proyecto/i }).within(() => {
      cy.findByRole('button', { name: /CANCELAR/i }).click();
    });

    // Assert
    cy.get('@projectTable').within(() => {
      cy.findByRole('row', { name: projectNameDeleted }).should('exist');
    });
  });
});
