1. Middleware de errores express (sync && async)
   https://expressjs.com/en/guide/error-handling.html

2. mysql2 (driver mysql)

3. dotenv para establecer las variables de entorno desdee el .env

```
DB_HOST=127.0.0.1
DB_USER=root
DB_DATABASE=students
```

Habría que establecer la conexión con las credenciales (password si estuviese configurada) del SGDB

4. Sanear interpolaciones con la feature prepare de mysql2 para prevenir sql injection:
   https://sidorares.github.io/node-mysql2/docs/documentation/prepared-statements

5. Ejemplo consumiendo la api desde un cliente construido en javascript vanilla
