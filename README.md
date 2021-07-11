# Gello Habits Backend.

Repositorio del backend de una app tracker de hábitos con sistema de rewards basados en la evolución de un personaje animado.

## Acerca del proyecto.

https://github.com/devcompzo/gello-habits

## Requerimientos

- nodejs v14.16.0 (se puede usar nvm sin problemas)
- npm v6.14.11 (se puede usar nvm sin problemas)

## Instalacion y ejecucion

- En caso de usar nvm asignar la version de nodejs correcta segun el `.nvmrc`
```
nvm use
```

- Instalar las dependecias del repositorio
```
npm install
```

- Copia el `.env.example` como `.env` en la raiz del proyecto y sustituye los valores
```
cp .env.example .env
```

- Ejecutar el proyecto en desarrollo
```
npm run dev
```

- Ejecutar el proyecto en produccion
```
npm run start
```

- Ejecutar el proyecto con heroku de forma local
```
heroku local web
```