# API

## Instalación

 ```bash
npm install typescript 
npm install express
npm install cors
npm install dotenv
npm install jsonwebtoken
npm install bcryptjs
npm install pg
```
devDependencies
```bash
npm install @types/express
npm install @types/cors
npm install @types/jsonwebtoken
npm install @types/bcryptjs
npm install @types/pg
nom install ts-node-dev
```

## Ejecución

```bash
npm run dev
```

## Documentación API
## Introducción

Bienvenido a **Mi API**, una API desarrollada con **Express** y **TypeScript** que permite gestionar usuarios, autenticar mediante **JWT** y acceder a rutas protegidas. Esta documentación detalla cómo interactuar con las diferentes rutas disponibles.

### Rutas
La API está compuesta por varias rutas, cada una con un propósito específico. Las rutas disponibles son:

- **/agent**: Ruta para gestionar agentes.
http://localhost:3000/api/v1/agent -> obtener todos los agentes | GET
http://localhost:3000/api/v1/agent/create-agent -> crear un nuevo agente | POST || (Body) name_item
http://localhost:3000/api/v1/agent/:id_agent -> obtener un agente por su id | GET
http://localhost:3000/api/v1/agent/:id_agent -> actualizar un agente por su id | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/agent/:id_agent -> eliminar un agente por su id | DELETE

- **/gestionmail**: Ruta para gestionar gestionmails.
http://localhost:3000/api/v1/gestionmail -> obtener todos los gestionmails | GET
http://localhost:3000/api/v1/gestionmail/ -> crear un nuevo gestionmail | POST || (Body) name_item
http://localhost:3000/api/v1/gestionmail/:id_item -> obtener un gestionmail por su id | GET
http://localhost:3000/api/v1/gestionmail/:id_item -> actualizar un gestionmail por su id | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/gestionmail/:id_item -> eliminar un gestionmail por su id | DELETE

- **/marca**: Ruta para gestionar marcas.
http://localhost:3000/api/v1/marca -> obtener todos las marcas | GET
http://localhost:3000/api/v1/marca/-> crear una nueva marca  | POST || (Body) name_item
http://localhost:3000/api/v1/marca/:id_item -> obtener una marca por su id | GET
http://localhost:3000/api/v1/marca/:id_item -> actualizar una marca por su id | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/marca/:id_item -> eliminar una marca por su id | DELETE

- **/monetizacion**: Ruta para gestionar monetizaciones.
http://localhost:3000/api/v1/monetizacion -> obtener todas las monetizaciones | GET
http://localhost:3000/api/v1/monetizacion/ -> crear una nueva monetizacion | POST || (Body) name_item
http://localhost:3000/api/v1/monetizacion/:id_item -> obtener una monetizacion por su id | GET
http://localhost:3000/api/v1/monetizacion/:id_item -> actualizar una monetizacion por su id | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/monetizacion/:id_item -> eliminar una monetizacion por su id | DELETE

- **/supervisor**: Ruta para gestionar supervisores.
http://localhost:3000/api/v1/supervisor -> obtener todos los supervisores | GET
http://localhost:3000/api/v1/supervisor/ -> crear un nuevo supervisor | POST || (Body) name_item
http://localhost:3000/api/v1/supervisor/:id_item -> obtener un supervisor por su id | GET
http://localhost:3000/api/v1/supervisor/:id_item -> actualizar un supervisor por su id  | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/supervisor/:id_item -> eliminar un supervisor por su id | DELETE

- **/typecause**: Ruta para gestionar tipificaciones.
http://localhost:3000/api/v1/typecause -> obtener todas las tipificaciones | GET
http://localhost:3000/api/v1/typecause/ -> crear una nueva tipificacion | POST || (Body) name_item
http://localhost:3000/api/v1/typecause/:id_item -> obtener una tipificacion por su id | GET
http://localhost:3000/api/v1/typecause/:id_item -> actualizar una tipificacion por su id | PUT (Body) name_item (params) id_item
http://localhost:3000/api/v1/typecause/:id_item -> eliminar una tipificacion por su id | DELETE

- **/informe**: Ruta para gestionar informes.
http://localhost:3000/api/v1/informe/filterDate -> obtener informe por fecha | GET
http://localhost:3000/api/v1/informe/dayDate -> obtener informe por fecha y agente | GET
http://localhost:3000/api/v1/informe/filter -> obtener informe 10 items mas utilizados general | GET
http://localhost:3000/api/v1/informe/filterSac -> obtener informe 10 items mas utilizados y SAC | GET
http://localhost:3000/api/v1/informe/filterSitar -> obtener informe 10 items mas utilizados y SITAR | GET
http://localhost:3000/api/v1/informe/filterSacValue -> obtener informe 10 items mas utilizados SAC yVALOR | GET
http://localhost:3000/api/v1/informe/filterSiterValue -> obtener informe 10 items mas utilizados y SITAR y VALOR | GET
http://localhost:3000/api/v1/informe/register -> obtener todos los informes| GET
http://localhost:3000/api/v1/informe/register -> crear un nuevo informe | POST  || (Body) id_agent,id_gestionmail,id_typecause,id_client,pos_tienda,id_marca,value_monetizacion,id_monetizacion,id_supervisor,ticket_mesa,ticket_secon_level
http://localhost:3000/api/v1/informe/register/:id_item -> obtener un informe por su id| GET
http://localhost:3000/api/v1/informe/register/:id_item -> actualizar un informe por su id| PUT (Body) id_agent,id_gestionmail,id_typecause,id_client,pos_tienda,id_marca,value_monetizacion,id_monetizacion,id_supervisor,ticket_mesa,ticket_secon_level (params) id_item
http://localhost:3000/api/v1/informe/register/:id_item -> eliminar un informe por su id| DELETE

- **/user**: Ruta para gestionar usuarios de la API.
http://localhost:3000/api/v1/user -> obtener todos los usuarios | GET
http://localhost:3000/api/v1/user/create-user -> crear un nuevo usuario | POST || (Body) id_user,user_authentication, password_authentication, rol_user
http://localhost:3000/api/v1/user/:id_user -> obtener un usuario por su id |
http://localhost:3000/api/v1/user/:id_user -> actualizar un usuario por su id | PUT (Body) id_user,user_authentication, password_authentication, rol_user
http://localhost:3000/api/v1/user/:id_user -> eliminar un usuario por su id | DELETE

- **/login**: Ruta para autenticar usuarios.
http://localhost:3000/api/v1/login -> autenticar un usuario

### Autenticación
Para acceder a las rutas protegidas, se utiliza el mecanismo de autenticación **JWT**. Para autenticar, se debe enviar un objeto con los datos de usuario y contraseña en el body de la solicitud. El objeto debe tener la siguiente estructura:

```json
{
  "username": "usuario",
  "password": "contraseña"
}
```
Una vez autenticado, se genera un token JWT que se envía en la cabecera de la solicitud. Este token se utiliza para identificar el usuario y permitir el acceso a las rutas protegidas.

## Licencia 

[MIT](https://choosealicense.com/licenses/mit/) 
