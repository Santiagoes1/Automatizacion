describe('Login en la URL proporcionada con credenciales extraídas', () => {
  
  it('Debe extraer usuario y contraseña y hacer login', () => {
    // Abrir la página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Esta parte lo que hace es que permite esperar 5s a que las credenciales sean visibles o se muestren en la pagina
    //.orangehrm-demo-credentials' esta es la clase que contiene los accesos, se obtuvo inspeccionando el html del codigo
    cy.get('.orangehrm-demo-credentials', { timeout: 5000 }).should('be.visible');

    // Extrae las credenciales que se encuentran expuestas en la URL
    cy.get('.orangehrm-demo-credentials p')
      .then(($elements) => {
        const username = $elements.eq(0).text().split(':')[1].trim();
        const password = $elements.eq(1).text().split(':')[1].trim();

        cy.log(`Usuario: ${username}, Contraseña: ${password}`);

        // Ingresar credenciales en el formulario de login
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();

        // Verifica que el login fue exitoso y que se encuentre en el menu dashoard
        cy.url().should('include', '/dashboard');

        // Espera a que la barra lateral se cargue y hace clic en el menu "Admin"
        cy.get('.oxd-main-menu-item').contains('Admin').click();
      });
  });
});