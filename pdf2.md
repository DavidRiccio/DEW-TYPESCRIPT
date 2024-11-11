
# Manipulación del DOM en jQuery: Selectores Avanzados

jQuery ofrece varios selectores avanzados que permiten seleccionar elementos en función de su jerarquía, filtros específicos, contenido, visibilidad y estado de formulario. A continuación se detallan estos selectores.

## 1. Selectores de Jerarquía
- `$("padre > hijo")`: Selecciona los elementos hijos directos del elemento `padre`.
- `$("padre hijo")`: Selecciona todos los elementos descendientes del elemento `padre`.
- `$("hermano + siguiente")`: Selecciona el siguiente hermano inmediato del `hermano` especificado.
- `$("hermano ~ siguientes")`: Selecciona todos los hermanos siguientes del `hermano` especificado.

## 2. Selectores de Filtros
- `$(":first")`: Selecciona el primer elemento.
- `$(":last")`: Selecciona el último elemento.
- `$(":even")`: Selecciona elementos con índice par.
- `$(":odd")`: Selecciona elementos con índice impar.
- `$(":eq(n)")`: Selecciona el elemento con el índice `n`.
- `$(":gt(n)")`: Selecciona elementos con índice mayor que `n`.
- `$(":lt(n)")`: Selecciona elementos con índice menor que `n`.
- `$(":not(selector)")`: Selecciona los elementos que no coinciden con el `selector` especificado.

## 3. Selectores de Contenido
- `$(":contains('texto')")`: Selecciona los elementos que contienen el texto especificado.
- `$(":has(selector)")`: Selecciona los elementos que contienen el `selector` especificado.
- `$(":empty")`: Selecciona los elementos que no tienen hijos.
- `$(":parent")`: Selecciona los elementos que tienen hijos.

## 4. Selectores de Visibilidad
- `$(":hidden")`: Selecciona los elementos ocultos.
- `$(":visible")`: Selecciona los elementos visibles.

## 5. Selectores de Formularios
- `$(":input")`: Selecciona todos los elementos de entrada.
- `$(":text")`: Selecciona elementos de entrada de texto.
- `$(":password")`: Selecciona elementos de entrada de contraseña.
- `$(":radio")`: Selecciona elementos de entrada tipo radio.
- `$(":checkbox")`: Selecciona elementos de entrada tipo checkbox.
- `$(":submit")`: Selecciona elementos de entrada tipo submit.
- `$(":reset")`: Selecciona elementos de entrada tipo reset.
- `$(":button")`: Selecciona elementos de botón.
- `$(":image")`: Selecciona elementos de imagen.
- `$(":file")`: Selecciona elementos de archivo.

### Estados de los elementos de formulario
- `$(":enabled")`: Selecciona los elementos habilitados.
- `$(":disabled")`: Selecciona los elementos deshabilitados.
- `$(":selected")`: Selecciona los elementos seleccionados.
- `$(":checked")`: Selecciona los elementos chequeados.

Este resumen cubre los selectores avanzados de jQuery, útiles para manipular el DOM de manera precisa y eficiente.
