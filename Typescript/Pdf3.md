# D3S1.1. Manejo de Errores
El manejo de errores en TypeScript se puede realizar de manera similar a JavaScript, pero aprovechando las ventajas del tipado estático de TypeScript para identificar tipos de errores específicos. Aquí veremos cómo usar `try-catch` y `throw`.

### Ejemplo 1: Manejo básico de errores
En TypeScript, el uso de `try-catch` es muy útil para manejar excepciones que podrían ocurrir en tiempo de ejecución.

```typescript
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Error encontrado:", (error as Error).message);
}
```
Aquí lanzamos un error cuando el divisor es cero. El bloque catch captura el error y muestra su mensaje.

Ejemplo 2: Errores personalizados
Podemos crear nuestras propias clases de error en TypeScript para manejar errores específicos.

```typescript
Copiar código
class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidInputError";
    }
}

function processInput(input: number) {
    if (input < 0) {
        throw new InvalidInputError("El valor de entrada no puede ser negativo.");
    }
    console.log("Procesando entrada:", input);
}

try {
    processInput(-5);
} catch (error) {
    if (error instanceof InvalidInputError) {
        console.error("Error específico:", error.message);
    } else {
        console.error("Error desconocido:", error);
    }
}
```
En este ejemplo, se lanza un error específico InvalidInputError cuando el valor de entrada es negativo, y se captura en el bloque catch.

D3S1.2. Decoradores
Los decoradores en TypeScript son una característica experimental que permite modificar clases y métodos, entre otras estructuras, a través de funciones especiales. Son especialmente útiles en frameworks como Angular. Para habilitar los decoradores, primero hay que activar la opción "experimentalDecorators": true en el archivo tsconfig.json.

Ejemplo 1: Decorador de Clase
Un decorador de clase puede modificar la clase o agregarle propiedades y métodos.

```typescript
Copiar código
function logClass(target: Function) {
    console.log("Clase decorada:", target.name);
}

@logClass
class MiClase {
    constructor(public nombre: string) {}
}

const instancia = new MiClase("Ejemplo");
```
En este caso, el decorador logClass imprime el nombre de la clase cada vez que la clase se define.

Ejemplo 2: Decorador de Método
Podemos crear decoradores que modifiquen el comportamiento de métodos específicos. A continuación, un decorador que registra el tiempo de ejecución de un método.

```typescript
Copiar código
function logExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = Date.now();
        const result = originalMethod.apply(this, args);
        const end = Date.now();
        console.log(`Método ${propertyKey} ejecutado en ${end - start}ms`);
        return result;
    };
}

class Operaciones {
    @logExecutionTime
    calcular(a: number, b: number): number {
        return a + b;
    }
}

const ops = new Operaciones();
ops.calcular(5, 10);
```
En este caso, el decorador logExecutionTime calcula y registra el tiempo que toma en ejecutarse el método calcular.

Ejemplo 3: Decorador de Propiedades
Otro uso común es un decorador que valida o transforma el valor de una propiedad.

```typescript
Copiar código
function readonly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Persona {
    @readonly
    nombre: string = "John";
}

const persona = new Persona();
persona.nombre = "Jane"; // Esto lanzará un error en modo estricto porque la propiedad es de solo lectura.
En este ejemplo, el decorador readonly asegura que la propiedad nombre sea de solo lectura.