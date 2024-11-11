
# Manipulación del DOM, Eventos y Efectos en jQuery

Este resumen cubre métodos para manipular el DOM, trabajar con eventos y aplicar efectos en jQuery.

## Manipulación del DOM

### Modificación de atributos y contenido
- **.attr()**: Obtiene o establece atributos de un elemento.
  ```javascript
  $("selector").attr("nombreDelAtributo", "nuevoValor");
  ```
- **.html()**: Obtiene o establece el contenido HTML de un elemento, incluyendo etiquetas.
  ```javascript
  $("div").html("<strong>Contenido</strong>");
  ```
- **.text()**: Obtiene o establece el contenido de texto de un elemento, sin HTML.
  ```javascript
  $("p").text("Texto actualizado");
  ```

### Manejo de clases CSS
- **.addClass()**: Agrega clases CSS.
- **.removeClass()**: Elimina clases CSS.
- **.toggleClass()**: Alterna la presencia de una clase.
  ```javascript
  $("#miDiv").toggleClass("activo");
  ```

### Inserción de elementos en el DOM
- **.append()**: Agrega contenido al final del elemento.
- **.prepend()**: Agrega contenido al inicio del elemento.
- **.after()**: Inserta contenido después del elemento.
- **.before()**: Inserta contenido antes del elemento.
  ```javascript
  $("#lista").append("<li>Nuevo elemento</li>");
  ```

### Eliminación de elementos
- **.remove()**: Elimina el elemento y sus hijos del DOM.
- **.empty()**: Elimina solo el contenido de un elemento, manteniendo el propio elemento en el DOM.
  ```javascript
  $("#contenedor").empty();
  ```

## Eventos en jQuery

Algunos eventos comunes incluyen:
- **.click()**: Evento de clic.
- **.dblclick()**: Evento de doble clic.
- **.hover()**: Evento de hover.
- **.focus()** y **.blur()**: Eventos de enfoque y desenfoque.
- **.change()**: Evento de cambio en un elemento.
- **.submit()**: Evento de envío de formulario.
- **.keydown()**, **.keyup()**: Eventos de teclas.
  ```javascript
  $("button").click(function() {
      alert("Botón clicado");
  });
  ```

### Métodos para gestionar eventos
- **.on()**: Adjunta uno o más eventos a elementos.
- **.off()**: Elimina uno o más eventos de elementos.
- **.trigger()**: Dispara un evento manualmente.

## Efectos en jQuery

### Efectos de animación
- **.show()** y **.hide()**: Muestran u ocultan elementos, de forma instantánea o gradual.
- **.toggle()**: Alterna la visibilidad de un elemento.
- **.fadeIn()** y **.fadeOut()**: Efecto de desvanecimiento.
- **.slideUp()** y **.slideDown()**: Deslizamiento para mostrar u ocultar un elemento.
  ```javascript
  $("#miElemento").fadeIn("slow");
  ```

Este resumen incluye los métodos clave para manipular el DOM, gestionar eventos y aplicar efectos con jQuery.
