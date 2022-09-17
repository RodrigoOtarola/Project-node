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

//ruta de archivo estatico css, con join concateno la ruta necesaria: __dirname = dir src.
app.use(express.static(join(__dirname,'public',)))

//Puerto, variable de entorno.
app.listen(process.env.PORT || 3000);
console.log('Servidor listo en el puerto ',process.env.PORT ||3000);