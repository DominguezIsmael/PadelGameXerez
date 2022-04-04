# PADEL WEB XEREZ
### Autor: Ismael Domínguez Campos.
### Grado Superior: Desarrollador de Aplicaciones Web.
### Curso: 2020/2021.

---

## INTRODUCCIÓN DEL PROYECTO

He llevado a cabo una web para un club de pádel que se llama "Padel Game Xerez" que es el club donde empecé en el mundo del pádel.

La página web consta de varios apartados que son:
  - Una "home" principal con un slider donde invita a visitar el club, hacerse socio y a reservar una pista.
  - Un apartado "club" donde se detalla los servicios que imparte el club así como el sacrificio que hace el club hacia sus clientes para que éstos disfruten.
  - Otro apartado "instalaciones" para poder ver las 5 pistas, las condiciones de éstas y también el bar.
  - Un "contacta" con un formulario donde el cliente puede mandar un correo desde la web y saber también otras formas de contacto.
  - Un "reserva" con un login necesario para poder así alquilar cualquiera de las 5 pistas a traves de la web.
  - Y una parte de administracion donde se podra tanto crear clientes nuevos, como editarlos o borrarlo y tambien con los trabajadores.

## OBJETIVO DEL PROYECTO

Éste proyecto tiene como objetivos, realizar una web para que se conozca que club es "Padel Game Xerez", tener un administrador que tenga control de clientes, trabajadores, los precios, etc.
Que se pueda reservar una pista en concreto, decidiendo tanto el dÍa, la hora y qué pista desea el cliente.
Que tenga un servicio de contacto sencillo para las dudas de los clientes.
Y promover el deporte del padel para agrandar la familia cada vez más.

Aquí podemos ver el modelo E/R que se ha usado para el proyecto:

## TECNOLOGÍA UTILIZADA PARA EL PROYECTO

  - Visual Studio Core: para la realización del código utilizado para crear un backend y un frontend con react, javascript, php, bootstrap, etc.
  - React: una biblioteca de JavaScript para crear interfaces de usuario.
  - Xampp: para el funcionamiento de un servidor local y para el acceso a la base de datos de MySql a través de PHPMYADMIN.
  - GitHub Desktop: para la subida o bajada del repositorio de git a traves del commit, push y pull para poder tenerlo tanto en el pc sobremesa como en el portátil.

## PROBLEMAS Y SOLUCIONES

Con el desarrollo del proyecto he ido teniendo problemas a lo largo del trayecto pero he ido solucionándolos poco a poco:

  - No sabía nada de react, con lo cual he tenido que adaptarme a éste nuevo lenguaje de programación y aprender conforme iba haciendo el proyecto.
  - Al principio del proyecto tuve conflictos con los puertos de xampp ya que me había instalado previamente el MySQL COMMUNITY, decidí desinstalar éste último y hacerlo todo desde PHPMYADMIN.
  - He tenido problemas con las apis ya que no estaba poniendo bien las rutas de acceso y el usuario de la base de datos.
  - Tuve problemas de estructuración de carpetas que hacían un problema a la hora de saber cuáles eran los archivos con los que se debía trabajar por lo que tuve que crear un nuevo repositorio haciendo una estructura organizada con las carpetas y archivos.
  - Al crear un repositorio nuevo como explico en el punto anterior, tuve que cambiar las rutas dentro del proyecto para que el backend y el frontend funcionaran bien.
  - 

 ## DESPLIGUE DEL PROYECTO
 
 Para que éste funcione en condiciones tenemos que instalar una serie de dependencias de React a través de la consola de comandos que son los siguientes:

  - npm install react-router-dom: Para todo el enrutado de React.
  - npm install react-boostrap: Para el uso de boostrap a través de componentes de React.
  - npm install react-icons: Para los iconos que aparecen en el footer. (npm install react-icons)
  - npm install @emailjs/browser: para el envío de correos del Contacta.
  - npm install md5: En mi caso para cifrar las contraseñas.

## CONCLUSIÓN

  Durante el tiempo de realización del proyecto me lo he pasado bien aprendiendo React ya que ni siquiera lo conocía, el proyecto se ha llevado a cabo hasta lo máximo que he podido hacer aunque seguiré trabajando en ello para hacerlo 100% funcional implentando futuras opciones.
  Los objetivos del proyecto se han cumplido ya que eran una administracion de clientes, trabajadores, etc. Y poder reservar una pista.

## BIBLIOGRAFÍA

  1. https://es.reactjs.org/
  2. https://www.youtube.com/watch?v=_DJBFUIT2Kg
  3. https://react-bootstrap.github.io/
  4. https://www.emailjs.com/
