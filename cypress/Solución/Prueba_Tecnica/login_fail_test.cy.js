describe('Prueba de Login - Caso No Exitoso', () => {
    it('Debe mostrar un mensaje de error con credenciales incorrectas', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // 1. Ir al login
  
      cy.get('input[name="username"]').type('Usuario'); // 2. Inserta el usuario que le proporcionamos, el cual es incorrecto
      cy.get('input[name="password"]').type('ClaveIncorrecta'); // 2. Inserta la contraseña que le proporcionamos, la cual es incorrecta
      cy.get('button[type="submit"]').click(); // 3. Clic en Login
  
      // 4. Verificar que el mensaje de error que se genera, si aparece al insertar las credenciales invalidas
      cy.get('.oxd-alert-content-text')
        .should('be.visible')
        .and('contain', 'Invalid credentials'); 
    });
  });