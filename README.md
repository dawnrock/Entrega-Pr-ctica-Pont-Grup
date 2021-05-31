![AnimationProject](https://user-images.githubusercontent.com/67965208/120204752-7528fc00-c229-11eb-9b02-f79947f2db3d.gif)



# Descarga el directorio completo del repositorio para iniciar la prueba.

Este proyecto ha sido creado con [Create React App](https://github.com/facebook/create-react-app). Es necesario tener instalado nodejs (https://nodejs.org/es/download/).

## Instalación.

Desde el directorio principal, escribir en consola (cmd, powershell, bash) el siguiente comando para instalar el fichero nodemodules:

### `npm install`

## Levantar proyecto.

El siguiente paso será escribir de nuevo en la consola el comando necesario para arrancar del proyecto:

### `npm start`

Si el explorador no se abre automáticamente, escribir en la barra del navegador el siguiente enlace para abrir la página manualmente: http://localhost:3000/

## Layout.

La página consta de tres partes:

- Header.
  >> Contiene el nombre de las tres escenas. Haciendo click sobre el nombre, el router nos llevará a su correspondiente escena.

- Container principal.
  >> Página principal donde se mostrarán las escenas.
  
- Footer.
  Muestra los siguientes enlaces directos:
  >> Repositorio de prácticas en gitHub.
  >> Página oficial del framework usado para el proyecto (React).
  >> Página de Twitter personal.
  >> Contactar por correo electrónico. 
  

## Paginación.

El proyecto está dividido en tres escenas:

- Home.
  >> Escena dónde cubriremos el caso de los cuadros de texto, para ello usaremos la libreria material-UI (https://material-ui.com/) para crear los cuadros de texto.
  
- Buscador de personajes de Rick & Morty.
  >> Ponemos en uso los formularios de contacto usando Fetch para las llamadas a servidor y styled-component (https://styled-components.com/) para el estilado. En este caso       usaremos un cuadro de texto (input) para filtrar entre todos los personajes de la famosa serie de animación.
  
- Galery.
  >> En esta escena cubrimos el caso de carousel de imágenes y de animaciones usando styled-components (https://styled-components.com/). Contiene cursores para desplazar el carousel de imágenes con animación y cambio de color (:hover). Las imágenes se desplazan con animaciones que imitan el movimento del desplazamiento. Además he añadido un indicador en el pié de imágen para indicar el punto de avance en la galería.


