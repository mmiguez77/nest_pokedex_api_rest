<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en DEV
1. Clonar repositorio.
2. Ejecutar 
``` 
npm i or npm install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar DB
```
docker-compose up -d
```

5. Modificar nombre del archivo __.env.template__ a __.env__

6. Completar las variables de entorno que sean necesarias

7. Iniciar aplicación 
```
npm run start:dev
```

8. Reconstruid DB con Seed para DEV
```
http://localhost:3000/api/v2/seed
```

## STACK
Mongo
Nest