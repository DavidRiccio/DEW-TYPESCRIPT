Definición de Clases y Propiedades
En TypeScript, una clase se define con la palabra clave class. Las propiedades pueden declararse con tipos explícitos para mejorar la verificación de errores.

```typescript
class Persona {
    public nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }

    private calcularAñosJubilación(): number {
        return 65 - this.edad;
    }
}
```
Modificadores de Acceso
public: Permite que las propiedades o métodos sean accesibles desde cualquier parte del código.
private: Limita el acceso a la clase misma.
protected: Permite el acceso solo desde la clase y sus clases derivadas.

```typescript
class Trabajador extends Persona {
    protected puesto: string;

    constructor(nombre: string, edad: number, puesto: string) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    public mostrarPuesto(): void {
        console.log(`Trabajo como ${this.puesto}.`);
    }
}
```
D2S1.2. Herencia y Polimorfismo
TypeScript permite que una clase herede de otra usando extends. Esto permite que una subclase tenga las propiedades y métodos de la superclase.

```typescript
class Animal {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public hacerSonido(): void {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    public hacerSonido(): void {
        console.log("El perro ladra.");
    }
}
```
// Ejemplo de polimorfismo
```typescript
const animal: Animal = new Animal("Genérico");
const perro: Animal = new Perro("Fido");

animal.hacerSonido(); // "El animal hace un sonido."
perro.hacerSonido();  // "El perro ladra."
```
D2S1.3. Clases Abstractas e Interfaces
Clases Abstractas: No pueden instanciarse directamente; se usan como base para otras clases que heredan de ellas.

```typescript
abstract class Transporte {
    abstract mover(): void;
}

class Coche extends Transporte {
    mover(): void {
        console.log("El coche se mueve en la carretera.");
    }
}

class Avion extends Transporte {
    mover(): void {
        console.log("El avión vuela en el aire.");
    }
}
```
Interfaces: Definen una estructura que otras clases deben seguir, permitiendo contratos entre diferentes partes del código sin imponer una implementación.

```typescript
interface Usuario {
    nombre: string;
    edad: number;
    saludar(): void;
}

class Administrador implements Usuario {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Soy ${this.nombre}, el administrador.`);
    }
}

class Invitado implements Usuario {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, soy ${this.nombre}, un invitado.`);
    }
}
```

D2S2.1. Introducción a los Generics
Los genéricos permiten crear funciones que funcionan con cualquier tipo de dato.

```typescript
function obtenerElemento<T>(elemento: T): T {
    return elemento;
}

const numero = obtenerElemento(5);       // T es `number`
const texto = obtenerElemento("Hola");   // T es `string`
Las clases genéricas permiten crear estructuras reutilizables para diferentes tipos de datos.

class Caja<T> {
    private contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }

    public obtenerContenido(): T {
        return this.contenido;
    }
}

const cajaDeNumeros = new Caja(123);
console.log(cajaDeNumeros.obtenerContenido()); // 123

const cajaDeTexto = new Caja("TypeScript");
console.log(cajaDeTexto.obtenerContenido()); // "TypeScript"
```
D2S3.1. Módulos en TypeScript
Los módulos exportan variables, funciones o clases que se pueden importar en otros archivos para organizar el código en partes reutilizables.
Exportar e Importar Módulos Simples
Archivo: mathUtil.ts


```typescript
export function sumar(a: number, b: number): number {
    return a + b;
}

export function restar(a: number, b: number): number {
    return a - b;
}
```
Archivo: main.ts


```typescript
import { sumar, restar } from './mathUtil';

console.log(sumar(3, 5)); // 8
console.log(restar(10, 7)); // 3
```

Exportar Clases y Funciones como Módulos
Archivo: usuario.ts


```typescript
export class Usuario {
    constructor(public nombre: string, public edad: number) {}

    public saludar(): string {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}

export function crearUsuario(nombre: string, edad: number): Usuario {
    return new Usuario(nombre, edad);
}
```
Archivo: app.ts


```typescript
import { Usuario, crearUsuario } from './usuario';

const nuevoUsuario = crearUsuario("Ana", 25);
console.log(nuevoUsuario.saludar()); // "Hola, soy Ana y tengo 25 años."
```
D2S3.2. Namespaces y su uso en aplicaciones grandes
Los namespaces agrupan código y evitan conflictos de nombres, especialmente en aplicaciones grandes. Son útiles en entornos globales, como el navegador.
Uso Básico de Namespaces
Archivo: formas.ts


```typescript
namespace Formas {
    export class Circulo {
        constructor(public radio: number) {}

        public calcularArea(): number {
            return Math.PI * Math.pow(this.radio, 2);
        }
    }

    export class Rectangulo {
        constructor(public ancho: number, public alto: number) {}

        public calcularArea(): number {
            return this.ancho * this.alto;
        }
    }
}

const miCirculo = new Formas.Circulo(5);
console.log(miCirculo.calcularArea()); // Área del círculo

const miRectangulo = new Formas.Rectangulo(4, 6);
console.log(miRectangulo.calcularArea()); // Área del rectángulo
Namespaces Anidados
```
Archivo: geometria.ts


```typescript
namespace Geometria {
    export namespace Formas2D {
        export class Cuadrado {
            constructor(public lado: number) {}

            public calcularArea(): number {
                return this.lado * this.lado;
            }
        }
    }

    export namespace Formas3D {
        export class Cubo {
            constructor(public lado: number) {}

            public calcularVolumen(): number {
                return Math.pow(this.lado, 3);
            }
        }
    }
}

const miCuadrado = new Geometria.Formas2D.Cuadrado(3);
console.log(miCuadrado.calcularArea()); // Área del cuadrado

const miCubo = new Geometria.Formas3D.Cubo(4);
console.log(miCubo.calcularVolumen()); // Volumen del cubo