
# Introducción a jQuery

jQuery es una biblioteca popular de JavaScript diseñada para simplificar tareas comunes en el desarrollo web, tales como:
- Manipulación del DOM (Document Object Model)
- Manejo de eventos
- Animaciones
- Interacción con servidores mediante AJAX

Su principal ventaja es permitir un código JavaScript más sencillo y fácil de entender, ayudando a reducir la cantidad de código necesario para tareas típicas y resolver problemas de compatibilidad entre navegadores.

## ¿Por qué usar jQuery?
Algunas razones para usar jQuery incluyen su popularidad y extensibilidad. Grandes empresas como Google, Microsoft, IBM y Netflix usan jQuery en sus plataformas.

## Configuración y uso básico

### Añadir jQuery a una página web
Hay dos formas principales de agregar jQuery:
1. **Descargar la biblioteca** desde [jquery.com](https://jquery.com) y enlazarla localmente.
   - Hay dos versiones:
     - **Producción** (comprimida): para sitios en vivo.
     - **Desarrollo** (sin comprimir): para pruebas y desarrollo.
2. **Usar un CDN** (Content Delivery Network), como el CDN de Google:
   ```html
   <head>
       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
   </head>
   ```

## Sintaxis de jQuery

La sintaxis básica de jQuery es `$(selector).action()`, donde:
- `$` define o accede a jQuery.
- `(selector)` selecciona elementos HTML.
- `action()` es una acción que se realizará en el elemento seleccionado.

### Ejemplos de uso
- `$(this).hide()` → Oculta el elemento actual.
- `$("p").hide()` → Oculta todos los elementos `<p>`.
- `$(".test").hide()` → Oculta todos los elementos con la clase `test`.
- `$("#test").hide()` → Oculta el elemento con id `test`.

Para evitar que jQuery se ejecute antes de que el documento termine de cargarse, es buena práctica usar el evento “documento listo”:
```javascript
$(document).ready(function(){
    // Métodos jQuery aquí
});
```
Forma corta:
```javascript
$(function(){
    // Métodos jQuery aquí
});
```

## Selectores de jQuery

Los selectores en jQuery son esenciales para interactuar con elementos HTML. A continuación, se resumen algunos selectores comunes:

### Selectores básicos
- `$("p")` → Todos los elementos `<p>`.
- `$("#miElemento")` → Elemento con ID `miElemento`.
- `$(".miClase")` → Todos los elementos con la clase `miClase`.
- `$("[miAtributo]")` → Elementos con el atributo `miAtributo`.

### Selectores de atributos
- `$("[atributo=‘valor’]")` → Elementos con un atributo que tiene el valor específico `valor`.
- `$("[atributo!=‘valor’]")` → Elementos cuyo atributo no es igual a `valor`.
- `$("[atributo^=‘valor’]")` → Elementos con un atributo que comienza con `valor`.
- `$("[atributo$=‘valor’]")` → Elementos con un atributo que termina en `valor`.
- `$("[atributo*=‘valor’]")` → Elementos con un atributo que contiene `valor`.

Este resumen cubre los conceptos básicos de jQuery, incluyendo su configuración, sintaxis y los selectores más utilizados.
