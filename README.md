Prueba Técnica - Cypress

Descripción

Este proyecto contiene pruebas automatizadas utilizando Cypress para validar el inicio de sesión en la plataforma OrangeHRM y la navegación a la pestaña de administración.

Requisitos

Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente:

Node.js

npm (incluido con Node.js)

Cypress instalado globalmente o dentro del proyecto

Instalación

Clona el repositorio e instala las dependencias:

# Clonar el repositorio
git clone <URL_DEL_REPO>
cd <Prueba_Tecnica>

# Instalar dependencias
npm install

Estructura del Proyecto

📂 cypress/
 ├── 📂 e2e/
 │   ├── login_test.cy.js  # Prueba de inicio de sesión
 ├── 📂 fixtures/          # Datos de prueba
 ├── 📂 support/           # Comandos personalizados
 ├── 📜 cypress.config.js  # Configuración de Cypress
📜 package.json            # Dependencias y scripts
📜 package-lock.json       # Archivo de bloqueo de versiones
📜 README.md               # Documentación del proyecto

Ejecución de las Pruebas

Para ejecutar las pruebas en modo interactivo:

npx cypress open

Para ejecutarlas en modo headless:

npx cypress run

Funcionalidades Probadas

✅ Abrir la URL de OrangeHRM
✅ Obtener credenciales automáticamente desde la página
✅ Iniciar sesión correctamente
✅ Verificar la redirección al dashboard
✅ Navegar a la pestaña "Admin"

Mejora del Código

Uso de beforeEach para reutilizar código repetitivo.

Separación de selectores en archivos fixtures.

Manejo de datos sensibles mediante variables de entorno.
