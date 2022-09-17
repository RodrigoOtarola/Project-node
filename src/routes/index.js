//importar modulo router
import {Router} from "express";
const router = Router();

//Despues del nombre de la vista se pasan los parametros a renderizar como objeto
router.get('/',(req,res)=>res.render('index',{title:'Website'}))

router.get('/about',(req,res)=>res.render('about',{title:'About'}))

router.get('/contact',(req,res)=>res.render('contact',{title:'Contact'}))

//exportar rutas
export default router;