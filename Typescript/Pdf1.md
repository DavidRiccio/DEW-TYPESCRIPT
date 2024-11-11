Tipos Básicos en 

string
Representa cadenas de texto.


```
let nombre: string = "Freddy Krueger";
number
```
Incluye enteros, flotantes y números binarios, octales y hexadecimales.
```
let edad: number = 45;
boolean
```
Representa valores de verdadero o falso.

```

let esActivo: boolean = true;
array

```
Tipo de dato que almacena listas de elementos del mismo tipo.
Dos formas de definir un array:
```

let numeros: number[] = [1, 2, 3];
let nombres: Array<string> = ["Alice", "Bob"];
tuple


```
Similar a un array, pero con una longitud fija y tipos específicos para cada posición.
```

let usuario: [string, number] = ["Alice", 30];
any


```
Tipo de dato que permite cualquier tipo de valor, similar a JavaScript. Se usa cuando no se conoce el tipo de dato, pero debe emplearse con precaución.
```
let datos: any = "Texto o número o booleano";
unknown
Tipo seguro para valores que no se conoce su tipo al momento de desarrollo; similar a any, pero más seguro.
```



```

let valorDesconocido: unknown;
valorDesconocido = "Podría ser cualquier cosa";
void
Tipo de retorno de funciones que no devuelven un valor.


```

function logMensaje(mensaje: string): void {
    console.log(mensaje);
}
never
Representa funciones que no pueden finalizar correctamente, como funciones que arrojan errores o que tienen loops infinitos.


```

function error(mensaje: string): never {
    throw new Error(mensaje);
}
Inferencia y Anotación de Tipos

permite la inferencia automática de tipos. Esto significa que el compilador asigna el tipo automáticamente en base al valor inicial, por lo que no es necesario especificarlo en algunos casos:


```
let mensaje = "Hola, 
"; // infiere como `string`
mensaje = 123; // Error: Type 'number' no se puede asignar a tipo 'string'
Funciones Tipadas


```
Definir Tipos en Parámetros y Retornos
Para que las  funciones sean predecibles, se recomienda tipar parámetros y el tipo de retorno.

function sumar(a: number, b: number): number {
    return a + b;
}
Parámetros Opcionales y Valores Predeterminados

``` 
permite definir parámetros opcionales con ? y valores predeterminados en funciones.


```
function saludar(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}`;
}
```
Uso de void y never en Funciones

void para funciones que no devuelven nada:

```

function log(mensaje: string): void {
    console.log(mensaje);
}

```
never para funciones que no pueden finalizar:
```
function errorFatal(): never {
    throw new Error("Ocurrió un error");
}
```
Objetos y Tipado
Definición de Objetos y Estructuras Complejas
Los objetos en 
pueden tiparse definiendo la estructura del mismo.


```

type Producto = {
    nombre: string;
    precio: number;
    enStock: boolean;
};
let producto1: Producto = { nombre: "Camiseta", precio: 20, enStock: true };

```
Unión de Tipos (|) y Tipos Opcionales (?)

Unión de tipos permite que una variable pueda tener más de un tipo.
```
let id: number | string;
id = 101; // válido
id = "ABC"; // también válido
```
Tipos opcionales permiten que algunas propiedades sean opcionales.

```

type Usuario = {
    nombre: string;
    edad?: number; // Propiedad opcional
};
```
Tipos Genéricos
Los genéricos permiten que las funciones y tipos trabajen con diferentes tipos sin perder la seguridad de tipos.
```

function identidad<T>(valor: T): T {
    return valor;
}
let num = identidad<number>(42); // T se asigna a number
```
Interfaces y Alias de Tipo (type)
Interfaces
```
Las interfaces definen la estructura de un objeto y pueden extenderse a otras interfaces, siendo ideales para crear jerarquías de tipos.

interface Persona {
    nombre: string;
    edad: number;
}
interface Empleado extends Persona {
    salario: number;
}
Alias de Tipo (type)


```
El alias type permite nombrar cualquier tipo de dato, incluyendo uniones y tipos complejos.
```
type Id = number | string;
type Producto = { nombre: string; precio: number };
```
Aplicación en Clases
Ambos pueden implementarse en clases, aunque las interfaces son recomendadas para modelar contratos o estructuras que deben seguirse de forma estricta.
```
class Empleado implements Persona {
    constructor(public nombre: string, public edad: number) {}
}
```