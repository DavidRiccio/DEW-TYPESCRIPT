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
