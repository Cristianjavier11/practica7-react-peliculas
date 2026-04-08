# Práctica 7 - App de Películas con React

## Integrante
- Cristian Javier Padilla Cornejo

## Objetivo
Desarrollar una aplicación web moderna implementando componentes, consumo de API, navegación con React Router y despliegue en Netlify.

## Tecnologías utilizadas
- React
- Vite
- React Router DOM
- CSS
- TMDB API
- GitHub
- Netlify

## Estructura general del proyecto
src/
components/
pages/
routers/
services/
utils/
img/

## Instalación y ejecución local
1. Clonar el repositorio:
git clone https://github.com/Cristianjavier11/practica7-react-peliculas.git

2. Entrar al proyecto:
cd practica7-react-peliculas

3. Instalar dependencias:
npm install

4. Ejecutar el proyecto:
npm run dev

## Rutas utilizadas
/ = Muestra el listado de películas
/movies/:movieId = Muestra el detalle de una película

## API utilizada
Se utilizó la API de TMDB (The Movie Database) para obtener información de películas.

## Descripción de funcionamiento
La aplicación muestra un listado de películas populares obtenidas desde la API. Cada película incluye imagen, título y calificación. Al seleccionar una película, se muestra una vista con información detallada como descripción, géneros y fecha de estreno.

## Link del repositorio
https://github.com/Cristianjavier11/practica7-react-peliculas.git

## Link del despliegue en Netlify
https://practica7-cristian.netlify.app/

## Conclusión
En esta práctica se desarrolló una aplicación web con React y Vite que consume una API para mostrar películas y su información. Se aplicaron conceptos como componentes, rutas, hooks y control de versiones, además del despliegue en Netlify.