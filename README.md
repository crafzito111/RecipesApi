# Skeleton

- Express
- PostgreSQL
- Sequelize ORM
- Autenticación con Tokens
- Bcrypt para hashear contraseñas
- Uso de Json Web Token

----

- Rutas de Login y register
 1. /api/v1/users
 2. /api/v1/users/me
 3. /api/v1/users/:id
 4. /api/v1/auth/register
 5. /api/v1/auth/login
 6. /api/v1/auth/recovery_password
 7. /api/v1/auth/verify_user


- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticación y manejo de permisos
- /users/:id DELETE, PUT
- /users/me 

* Orden

0. package.json  
npm init -y


1. dependencias 
npm i espress sequelize .env 


2. dependencias de desarrollo 
npm i nodemon


3. package.json scripts 
 "start" "node src/app.js"
 "dev" "nodemon src/app.js"


4. app.js 
src/app.js


5. .env
NODE_ENV = development

#Puerto en el que va a correr mi API
PORT = 9000

#Variables de entorno de mi base de datos
DB_HOST = localhost
DB_USER = postgres
DB_PASS = password
DB_NAME = example_db
DB_PORT = 5432
JWT_SECRET = word


6. config.js

7. database.js
8. modelos
9. controladores
10. servicios
11. rutas