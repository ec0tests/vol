# Comentarios generales

Comentaré toda la estructura del proyecto pero sólo  las partes de código que considero difíciles de entender, ya que es la parte del frontend, no del back y tampoco tiene javascript muy complicado y enrevesado.
Partes del proyecto 

# Plugins externos utilizados
    
    • react-big-calendar: https://github.com/intljusticemission/react-big-calendar
    • recharts: https://github.com/recharts/recharts
    • react-bootstrap-table: http://allenfang.github.io/react-bootstrap-table/
    • react-select: https://github.com/JedWatson/react-select
    • react-dropzone: https://github.com/react-dropzone/react-dropzone
    • react-draft-wysiwyg: https://github.com/jpuri/react-draft-wysiwyg
    • react-image-lightbox: https://github.com/frontend-collective/react-image-lightbox/
    • jquery-touchwipe http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
    • jquery https://jquery.com/
    • bootstrap4 https://getbootstrap.com/
    • tingle.js https://robinparisi.github.io/tingle/
    • react-modal-video https://github.com/appleple/react-modal-video
       
# Directorio  Public

Dentro del directio public , el archivo importante que se encuentra es el archivo index.html que es donde están exportadas las librerías css que se cargan online  , como por ejemplo bootstrap 4. Tambíen está el favicon de la web

# Directorio node_modules

Contiene todos los plugins instalados mediante npm que están documentados en la parte de código donde se utilizan. 
Directorio  src

Aquí se encuentran los archivos que contienen el código del proyecto:

 

Dentro del **directorio admin** , está todo el html, css y javascript de la parte del administrador y dentro del directorio web todo el html , css y javascript de la parte de la web .
El archivo App.js es el archivo donde le doy una ruta  a cada componente de react principal de la aplicación , tanto de la parte web como de la parte del administrador. Por ejemplo para que al poner la ruta /ficha dentro de la aplicación me llame al componente con nombre ficha , utilizo el siguiente código: 
 

El archivo **App.css** contiene clases css comunes , que utilizo en diferentes componentes .

# Parte web

La parte web contiene una carpeta images y la carpeta components. 

•	**_Images:_**  es donde se guardan todas las imágenes del proyecto , excepto las que venían con el template del administrador.

•	**_Components:_**  contiene diferentes directorios, uno con cada componente principal , como por ejemplo la página de blog , la home , etc . Dentro de la carpeta components también hay una subcarpeta llamada comunes , que contiene los archivos de componentes comunes , que son utilizados en diferentes sitios.

## DIRECTORIO COMUNES:

Cada componente tiene su archivo .js con el código javascript y el código html y su archivo .css con el código css.
•	_**Arrow_top :**_  Es el componente que contiene el código de la flecha que aparece al hacer scroll en la pantalla y sirve para volver a top 0 al hacer click 

•	_**Buscador_filtro:**_ Contiene el código del menú de filtro de la pantalla /filtro , para este componente se utilizan diferentes las propiedades de estado de react , estos estados lo uso para dárselos como valor a algunos  inputs y partes del html y voy modificando su valor mediante funciones.

_sum_adultos()_ , utilizada al clickar en los botones de + de los contadores de personas, la utilizo para sumar 1 a la variable de estado de contador adultos . La función res_adultos() lo mismo pero para restar 1 , y si el valor llega a <0 le doy valor 0 , ya que no puede ser negativo .

_sum_ninyos() y res_niynos()_ hace lo mismo pero para el contador de niños.

_restablecer()_  se ejecuta al clickar en el botón restablecer y pone los contadores de niños y de adultos con valor 0 . 

_color_segunpack()_  sirve para a partir de la propiedad tipo que  le paso al componente buscador filtro , ej: tipo romántico, varío los colores de los botones del menú filtro , dándole diferentes valores a las variables de estado y añadiendo estas variables al css de los botones, a su vez estos valores son nombres de clases css que les dán propiedades como el background-color


_componentWillMount()_ : es la función de react que ejecuta el código que contiene una vez se ha cargado todo el html del component. Contiene código jquery para que al clickar en los diferentes botones de filtro , se oculten los demás filtros . También contiene el código para que al clickar en cualquier sitio de la pantalla excepto en las clases deseadas , se oculten los filtros abiertos y el difuminado.
 
•	_**Card_experiencias.js:**_ es el componente que contiene el código html para crear cada card de la página filtro, y que luego se llamará las veces necesarias en otros componentes.
 
•	**_Carousel_cards.js:_** contiene el código de los carouseles de ofertas, utilizando el componente carousel de bootstrap4, la modificación hecha, ha sido crear 2 iconos de arrows sin funcionalidades dentro de cada elemento delcarousel, y sin opacidad por debajo, las flechas reales que tienen la funcionalidad, ya que así no quedan fijas al pasar de componente. Las flechas reales que tienen funcionalidad tienen la clase Flecha-real y las visibles sin funcionalidad la clase Flecha-falsa.
 
El siguiente código sirve para poder pasar el carousel haciendo un swipe en móvil, para ello utilizo el plugin jquery-touchswipe.

•	**_Certificado.js:_** contiene el código de la sección del certificado de tripadvisor. Utilizo el plugin tingle.js para crear el modal que se abre al clickar en el botón ver opiniones y lo relleno con la función.
 
•	**_Certificado_peq.js:_** el html de este componente es similar al certificado.js pero con un formato visual más pequeño a causa del css. Al hacer click en ver opiniones te lleva al enlace de opiniones de vol de Coloms en TripAdvisor, este componente se usa solo en entrada_blog



•	**_Datepicker.js:_** utilizo el plugin react-date-picker .Si al llamar a este componente le doy la propiedad tipo= inline , hago que se retorne el componente con la propiedad del plugin isOpen=true y así viene el componente visible por defecto  , sin tener que clickar en ningún botón para que se abra


 
•	**_Debes_saber.js:_** no tiene ninguna funcionalidad especial , es solo html y css

•	_**Experiencia_completa.js:**_ no tiene ninguna funcionalidad , es solo html y css

 

•	**_Experiencia_volarGlobo.js:_** utilizo el plugin react-modal-video para el modal del vídeo que aparece al clickar en el icono del play . Le paso las propiedades necesarias al plugin por ejemplo si el vídeo es de Youtube  , dentro de la etiqueta <ModalVideo>

 

•	**_Footer_estilo1.js:_** es uno de los estilos de footer. Utilizo el plugin tingle.js para los modales de cookies,privacidad,etc . El contenido de los modales  se lo doy mediante la función del plugin modal.setContent y los modales los creo en una variable  mediante new tingle.modal

 
•	**_Footer_estilohome.js:_** es otro estilo de footer, la funcionalidad es igual que el footer_estilo1.js

 

•	**_Footer_patrocinadores.js:_** es solo html y CSS , no tiene funcionalidad

 


•	**_Subetufoto.js:_** utilizo el plugin react-slick para hacer el slider , con la variable settings le doy las propiedades y luego esta variable la pongo como atributo de la etiqueta <Slider> 

 












•	**_Header.js:_** el html tiene parte con la clase Megamenu-div que hace que todo ese div se muestre en desktop y otra parte con la clase Megamenu-div-movil  que hace que todo ese div se muestre en móvil.  Funciones:

_Show_megamenu()_: función que sirve para mostrar el menú vuelos en globo

_Hide_megamenu()_: función que sirve para ocultar el menú vuelos en globo

_Show_megamenu_movil()_: función que sirve para mostrar el menú vuelos en globo  móvil

_Hide_megamenu_movil()_: función que sirve para ocultar el menú vuelos en globo móvil

Además de estas funciones contiene código comentado para cambiar el logo según el tamaño de la pantalla , ocultar los menús al clickar en cualquier lugar de la pantalla y también para hacer el header fixed al hacer scroll.

 

El componente Header.js llama al componente Menu2.js 

•	**_Menu2.js:_** contiene el código del menú de navegación de la web , utilizo él plugin tingle.js para el modal del iframe del mapa meteorológico, con la función setcontent relleno el modal inicializado en la variable  modal_meteorológico. Funciones :

_Show_menu():_ función que sirve para mostrar el menú de navegación de la web

_Hide_menu():_ función que sirve para ocultar el menú de navegación de la web


 


## Directorio bloge

**_Bloge.js:_** se llama en la dirección /entrada_blog, dentro de este componente llamo al componente Card_experiencias.js que se repite más de una vez, para simular la respuesta de una bd en json , introduzco los datos en un json y luego voy rellenando el array array_card_experiencias, mediante un bucle for , recorriendo esta variable voy creando cada etiqueta <Card_experiencias> y rellenando sus atributos con los datos que contiene el json. 

## Directorio blogp

**_Entrada_blog.js:_** no tiene funcionalidad que explicar.

 

**_Blogp.js:_** contiene  la pagina /blog , dentro de este componente llamo al componente Entrada_blog que se repite más de una vez  , al llamar a este componente, para simular una respuesta json de una bd , hago lo mismo explicado en Bloge.js con el componente Card_experiencias.js

## Directorio Contact

**_Contact.js:_** contiene la pagina /contact , no tiene funcionalidad 

## Directorio Faq

**_Pregunta_faq.js:_** contiene el código para el desplegable de la pregunta , utilizando las propiedades css :after y :before para crear los iconos , añadiendo la funcionalidad de cambiar las clases de todos los elementos que contiene la clase accordion y panel mediante un bucle for .
 

**_Faq.js:_** se ejecuta en /faq llama al componente pregunta_faq.js entre otros , al llamar a este componente, para simular una respuesta json de una bd , hago lo mismo explicado en Bloge.js con el componente Card_experiencias.js

## Directorio Filtro

**_Filtro.js:_** se ejecuta en /filtro , la funcionalidad que  tiene es al llamar al componente Card_experiencias.js , al llamar a este componente, para simular una respuesta json de una bd , hago lo mismo explicado en Bloge.js con el componente Card_experiencias.js





## Directorio Home

_**Modal_cupon.js:**_ contiene el código del modal cupon de regalo. El modal está divido en diferentes divs que contiene cada fase del modal y mediantes las funciones fase1, fase2 , etc oculto una fase y muestro la siguiente .  La variable fecha_confirmada la utilizo para saber si he llamado a la función comprobar fecha. 

•	_fase1()_: sirve para ocultar el div de la fase 1 y mostrar la fase 2. Las demás funciones con nombre fase hacen lo mismo .

•	_comprobar_fecha():_  al clickar en el botón comprobar fecha , muestra un span debajo , y pone el botón para continuar en enabled

**_Home.js:_** utilizo el plugin tingle.js para los modales de privacidad,cookies,etc. Inicializo en modal en una variable mediante new tingle.modal y le doy el contenido mediante .setContent() y mediante la función modal.open() abro el modal. Para darle el efecto parallax al  background de la primera sección de esta página utilizo el plugin react-parallax y llamo a su componente mediante la etiqueta <Parallax> pasándole como propiedad la imagen deseada.
Para los tooltips de los iconos de la primera sección utilizo el tooltip de bootstrap y le pongo los siguientes atributos a las etiquetas que quiero que tengan tooltip data-toggle="tooltip" data-placement="top" title="Con niños".

## Directorio Instalaciones

_**Instalacion.js:**_ contiene el código del div con cada instalación. En este componente utilizo el plugin react-image-lightbox para la galería de imágenes que se abre al clickar en cada instalación. En la constante images, introduzco la ruta de cada imagen que habrá en la galería , y luego la introduzco como atributo de la etiqueta <Lightbox>

 
**_Instalaciones.js:_** se llama en /instalaciones.js  , la funcionalidad que  tiene es al llamar al componente Instalacion.js , al llamar a este componente, para simular una respuesta json de una bd , hago lo mismo explicado en Bloge.js con el componente Card_experiencias.js




## Directorios Pack historico y Pack romantico

**_Pack_historico.js y Pack_romantico.js_**: la funcionalidad es la misma que en Filtro.js , solo cambian pequeñas cosas de html y css.

## Directorio Pilotos

**_Card_pilotos.js:**_ utilizo el plugin react-image-lightbox al igual que en Instalacion.js
 

**_Seo_text.js :_** no tiene ninguna funcionalidad , solo es html y css

 
**_Pilotos.js:_** llamo al componente card_pilotos.js y al seo_text.js repetidas veces . Para simular una respuesta de una BD en json , utilizo el mismo método que utilizaba en Filtro.js con el componente Card_experiencias.js

# Parte administrador

La parte del administración está hecha a partir de un template de materialpro , dentro del directorio admin están las carpetas assets , css , scss  y components . Las carpetas assets, css y scss contienen los archivos del template de materialpro. La carpeta components contiene diferentes directorios con cada uno de los componentes utilizados en el administrador. 
Comentarios generales

1.	En todos los componentes que utilizan el componente datatable , le paso la data y la configuración como prop, con la propiedad onRowClick, ejecutaré la función que le pase , después de hacer click sobre un row del datatable, y tendré disponible los datos de ese row donde he clickado para utilizarlos dentro de la función. Ej: 
 


2.	Las funciones del administar editar_ o crear_ o borrar_ lo que hacen es cambiar valores de los inputs del formulario, hacer un reset del formulario y mostrar un modal de si estás seguro de borrar respectivamente. Por lo tanto no las volveré a comentar excepto si hay algún caso muy particulas




## Directorio Comunes

Contiene los componentes utilizados en diversos sitios del administrador. Dentro de esta carpeta, cada subcarpeta es un componente diferente.
calendar


**_Events.js:_** contiene un json de ejemplo con eventos del calendario , luego cuando llame al componente Calendario.js en otros componentes del administrador , le pasare como propiedad un json con el mismo formato que este para asignar los eventos

**_Calendar.js_**: utilizo el plugin react-big-calendar y el plugin moment.js . Para variar los eventos del calendario , vario el valor de la propiedad  events de la configuración del calendario según la propiedad que le paso al componente cuando lo llamo. 

Documentación plugin : https://github.com/intljusticemission/react-big-calendar

 
 
### Directorio card_image

**_Card_image.js:_** contiene 1 modal , para preguntar si de verdad se desea eliminar el piloto, mediante los props que le paso cada vez que llamo al componente varío el html .
 
### Directorio datatable

Dentro de la carpeta 2 está el código, en la carpeta images hay iconos de la tabla .

Datatable.js: utilizo el plugin react-bootstrap-datatable . La clase ActionFormatter , sirve para crear el botón de ver en los datatables que lo necesitan, según si el prop accion es = true o no , hago un return con una tabla con un botón de ver para mostrar el formulario de editar cada registro de la tabla . Mediante los props , le paso la data , las columnas de la tabla y las opciones de la tabla que quiero utilizar, por ejemplo la función de exportar a csv .

•	_afterSearch():_  sirve para ejecutar alguna función después de usar el buscador de la tabla.

•	_rellenar_columnas():_ recorro el array de columnas que paso como prop en formato json y lo voy metiendo en un array

•	_pintar_array():_ recorro el array que he rellenado anteriormente , y hago un return, para pintar las etiquetas de cada columna.

Documentacion plugin: http://allenfang.github.io/react-bootstrap-table/

 
### Directorio dropzone

_**Dropzone_clase.js:**_ contiene el plugin react-dropzone. No tiene funcionalidad a parte de la del plugin. 

Documentación plugin : https://github.com/react-dropzone/react-dropzone

### Directorio header

**_Header.js:_** no tiene funcionalidad.
 
 
### Directorio menu

**_Menu.js:**_ utiliza el NavLink de react para el enrutamiento de cada elemento del menú.

 
 
### Directorio pregunta_faq_admin

**_Pregunta_faq_admin.js:_** contiene un modal de borrar pregunta. No tiene funcionalidad que explicar.
 
### Directorio react-select

**_React_select.js:_** utilizo el plugin react-select, toda la funcionalidad que tiene el componente, es del plugin

Documentación del plugin: https://github.com/JedWatson/react-select

 
### Directorio text-editor

**_Text_editor.js:**_ utilizo el react-draft-wysiwyg, toda la funcionalidad que tiene el componente, es del plugin

Documentación del plugin: https://github.com/jpuri/react-draft-wysiwyg
 

## Directorio Dashboard

Contiene la carpeta con los componentes utilizados en /admin/dashboard
**_Modales.js:_** contiene los modales que se muestran al hacer click en los botones ver de los datatables de esta página. 

**_Chart.js:_** utilizo el plugi recharts. La funcionalidad del componente viene de este plugin 

Documentación plugin: https://github.com/recharts/recharts
 

**_Dashboard.js:_** contiene el componente al que se llama en /admin/dashboard , este componente utiliza el calendar.js y el datatable.js  , al llamarlos les paso como prop diferentes objetos json para simular una respuesta de la bd con los datos necesarios, como por ejemplo las columnas del datatable, la data del datable , o los eventos del calendar. Todas estas variables de datos están definidas al final del componente.

## Directorio Site

Contiene la carpeta con los componentes utilizados en /admin/site
Modales.js: contiene los modales de todo /admin/site , que luego llamare en Site.js
Site.js: contiene el componente al que se llama en /admin/site , este componente utiliza el el datatable.js  , al llamarlo le paso como prop diferentes objetos json para simular una respuesta de la bd con los datos necesarios, como por ejemplo las columnas del datatable, la data del datable y las opciones que quiero que tenga, por ejemplo el exportar a csv. Todas estas variables de datos están definidas al final del componente.


## Directorio Adm_vuelos

Contiene la carpeta con los componentes utilizados en /admin/vuelos
**_Vuelo.js:**_ contiene los modales de borrar vuelo y de editar vuelo. El modal de editar vuelo utiliza el componente comun dropzone_clase.js. 

•	_editarVuelo()_: muestro el modal de editar vuelo y cambio el contenido de este dándole el valor de las props correspondientes que serán diferentes según el componente Vuelo en el que clicke.

•	_borrarVuelo()_: cambio el valor de algunas partes del modal dándole el valor de las propiedades pasadas, que serán diferentes según el componente Vuelo en el que clicke
 

**_Vuelo_adm.js:_** llamo al componente Vuelo.js repetidas veces dándole unas props diferentes. 


## Directorio Adm_productos

Contiene la carpeta con los componentes utilizados en /admin/productos. Tiene la misma funcionalidad y estructura que adm_vuelos ,  aunque con diferentes necesidades. Por ejemplo, aquí el modal editar utiliza el componente calendar.js pero la estructura de los compoenntes son iguales a los de vuelos. La única funcionalidad que creo que merece la pena explicar son las funciones :
•	_formatDate():_ sirve para cambiar de un formato de fecha a uno adecuado para el componente calendar.js

•	_click_calendario():_  sirve que al clickar 1 vez en el calendario el input de fecha inicio se rellene con el valor clickado y al clickar la segunda vez el input de fecha final sea el que se rellene .

## Directorio Adm_ofertas

Contiene la carpeta con los componentes utilizados en /admin/ofertas. Tiene la misma funcionalidad y estructura que adm_productos,  solo cambian los campos del modal. El tema del calendar es también es  igual que en el adm productos.

## Directorio Adm_experiencias

Contiene la carpeta con los componentes utilizados en /admin/experiencias.
**_Datatable_experiencias.js:_** es similar al componente Datatable.js solo que este contiene un botón de desvincular , para eliminar una fila del datatable. Esto lo hago mediante la clase createCustonDeleteButton  y le paso las propiedades necesarias
 

**_Experiencia.js:_** contiene los modales de editar y borrar experiencia. El modal de editar experiencia contiene 2 datatables del componente Datatable_blog.js, uno con las ofertas vinculadas a esta experiencia y el otro con los packs vinculados.

**_Experiencias _adm.js:_** Llama al componente experiencia.js repetidas veces. 

## Directorio Adm_reservas

Contiene la carpeta con los componentes utilizados en /admin/reservas.

**_Datatable_reservas.js:_** es similar al componente Datatable.js solo que en esta tabla las columnas están introducidas estáticas  y no mediante props.

**_Reservas _adm.js:_** Tiene toda la funcionalidad de mostrar y cambiar valores de los diferentes modales que contiene la página. También llama a los componentes Datatable_reservas.js  y Calendar.js y contiene la data del datatable y de los eventos del calendar

**_Row_lista.js:_** Contiene el html de las rows que se crean en el modal que aparece una vez se clicka en una experiencia desde el calendario. Contiene la función editar_desdeCalendario(), que cambia valores de elemento del modal utilizando jquery.


## Directorio Adm_blog

Contiene la carpeta con los componentes utilizados en /admin/blog.

**_Datatable_blog.js:**_ es similar al componente Datatable.js solo que este contiene un botón de desvincular , para eliminar una fila del datatable. Esto lo hago mediante la clase createCustonDeleteButton  y le paso las propiedades necesarias
 
_**Modales.js:**_ contiene los modales de todo /admin/blog , que luego llamare en Blog_adm.js

**_Blog _adm.js:_** A diferencia de otros componentes, aquí en vez de aparecer un modal de editar al clickar en un row del datable, lo que hago es cambiar el value de los inputs del formulario que aparece siempre visible al lateral del datable mediante la función editarPost() y crearPost().

 

