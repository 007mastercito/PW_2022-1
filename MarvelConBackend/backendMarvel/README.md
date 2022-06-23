#Backend MCU

##INSTRUCCIONES

npm init -y
npm install express --save

*Creamos el index.js y escribimos:
import Express from "express";

*En package.json ponemos antes del debug:
type":"module",

*Dsp de scrip poner -> para no escrbiir en terminarl node index.js -> com automatizar
"scripts": {
"start:dev" : "node index.js",

- Ya en consola poner: npm run start:dev -> como Go Live

*para q el servidor se ercargue a penas haga cambio
en terminal: npm install nodemon --save-dev

*ahora cambiamos esto a:
"start:dev": "nodemon index.js",

*ahora para correr: npm run start:dev
es casi como un Go Live