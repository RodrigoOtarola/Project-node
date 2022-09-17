//Importar archivos de express
import express from 'express';
//Crear ruta absoluta, join es para servir para linux y windows
import {dirname,join} from 'path';
//Objeto global necesario
import {fileURLToPath} from 'url';
//Importar rutas
import indexRoute from './routes/index.js';

//Crea app con express
const app = express();

//Para llamar ruta absoluta. ej: D:\laragon\wwwproject-node\src
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname):

//ruta de vistas
app.set('views',join(__dirname,'views'));

//Establecer nueva configuracion con motor de plantillas ejs (viene incorporador)
app.set('view engine','ejs')

//ruta.
app.use(indexRoute);

//Puerto
app.listen(3000);
console.log('Servidor listo en el puerto ',3000);