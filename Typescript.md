Instalación y Configuración del Proyecto
Asegúrate de tener instalado Node.js

Verifica la instalación ejecutando node -v en la terminal. Si no está instalado, descárgalo desde el sitio oficial de Node.js.
Abre tu proyecto en Visual Studio Code (VSC)

Usa el menú "Archivo" > "Abrir carpeta" para seleccionar la carpeta de tu proyecto.
Crea la estructura de carpetas


```
proyecto/
├── src/
│   ├── script.ts
│   └── public/
│       ├── index.html
│       └── styles.css
├── dist/
```
Inicia el Proyecto Node

Abre una terminal en VSC y ejecuta
``` npm init -y para crear un archivo package.json con la configuración predeterminada.```
Instala TypeScript y otros paquetes necesarios

Ejecuta``` npm install typescript ts-node @types/jquery --save-dev.```
2. Configuración de TypeScript
Genera un archivo de configuración de TypeScript

Ejecuta ```npx tsc --init para crear tsconfig.json. ```Asegúrate de que contenga las siguientes configuraciones:
json

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```
Estructura de carpeta final


```
Proyecto/
├── node_modules/
├── src/
│   ├── script.ts
│   └── public/
│       ├── index.html
│       └── styles.css
├── dist/
│   └── script.js   // generado tras compilar TypeScript
├── package-lock.json
├── package.json
└── tsconfig.json
```
3. Compilación de TypeScript a JavaScript
Agrega un script en package.json para compilar TypeScript y ejecutar el proyecto:
json

```
"scripts": {
  "start": "ts-node src/script.ts",
  "build": "tsc"
}
```
Compila el proyecto ejecutando npm run build en la terminal, lo que generará los archivos .js en la carpeta dist.
4. Ejecución de la aplicación
Selecciona el archivo index.html en VSC y pulsa “Go Live” para ejecutar la aplicación.

Abre tu archivo package.json y agrega un script build que ejecute la compilación de TypeScript. Aquí tienes un ejemplo de cómo se vería:
```
json
Copiar código
{
  "name": "proyecto-ts-jquery",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^4.5.4",
    "@types/jquery": "^3.5.14"
  },
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```
En este caso, hemos agregado un script llamado build que ejecuta el compilador de TypeScript (tsc) para compilar todo el código TypeScript de la carpeta src (según tu configuración en el archivo tsconfig.json).

Paso 2: Ejecuta npm run build
Con el script de compilación definido en package.json, puedes ejecutar el siguiente comando en la terminal para compilar tu proyecto:

bash
Copiar código
npm run build
Esto hará que TypeScript compile tu código desde la carpeta src y genere los archivos JavaScript en la carpeta dist (o cualquier otra carpeta que hayas configurado en tsconfig.json).

Paso 3: Verifica el resultado
Cuando ejecutes npm run build, deberías ver que los archivos TypeScript en la carpeta src se compilan y se colocan en la carpeta dist como archivos JavaScript. Ahora puedes servir estos archivos estáticos (como en la opción que te di anteriormente con http-server o express) y ver el resultado en el navegador.

Consideraciones adicionales
Si quieres que el proceso de compilación se ejecute automáticamente cada vez que realices cambios en el código, puedes usar tsc --watch o usar una herramienta como webpack o parcel.
Asegúrate de que tu archivo tsconfig.json esté correctamente configurado para especificar las rutas de entrada y salida.
Si quieres, te puedo ayudar a configurar herramientas adicionales para el flujo de trabajo. ¿Te gustaría agregar alguna otra funcionalidad?
