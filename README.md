# Prueba Técnica - Cypress

## Descripción
Este proyecto contiene pruebas automatizadas utilizando [Cypress](https://www.cypress.io/) para validar el inicio de sesión en la plataforma OrangeHRM y la navegación a la pestaña de administración.

## Repositorio
Repositorio: **Automatizacion**  
URL: `https://github.com/Santiagoes1/Automatizacion`

## Requisitos
Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Cypress instalado globalmente o dentro del proyecto

## Instalación
Clona el repositorio e instala las dependencias:

# Clonar el repositorio
git clone https://github.com/Santiagoes1/Automatizacion
cd Automatizacion

# Instalar dependencias
npm install

## Estructura del Proyecto

- 📂 **cypress/**
  - 📂 **e2e/**
    - 📜 **login_test.cy.js** - Prueba de inicio de sesión exitosa  
    - 📜 **login_fail_test.cy.js** - Prueba de inicio de sesión no exitosa  
  - 📂 **support/** - Comandos personalizados  
  - 📜 **cypress.config.js** - Configuración de Cypress  
- 📜 **package.json** - Dependencias y scripts  
- 📜 **package-lock.json** - Archivo de bloqueo de versiones  
- 📜 **README.md** - Documentación del proyecto  

## Ejecución de las Pruebas

### Para ejecutar las pruebas en modo interactivo:

npx cypress open

### Para ejecutarlas sin interfaz gráfica:

npx cypress run

## Funcionalidades del proyecto

- ✅ Abrir la URL de OrangeHRM
- ✅ Obtener credenciales automáticamente desde la página
- ✅ Iniciar sesión correctamente (caso exitoso)
- ✅ Validar error en credenciales incorrectas (caso no exitoso)
- ✅ Verificar la redirección al dashboard
- ✅ Navegar a la pestaña "Admin"

