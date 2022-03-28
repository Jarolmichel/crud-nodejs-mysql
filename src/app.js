//Inicializar el servidor de Nodejs con express.
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes

const customerRoutes = require('./routes/customers');


//Settings
app.set('port', process.env.PORT || 3000);//Bien esta linea establece el puerto por el que se va a ejecutar nuestra aplicacion.
app.set('view engine', 'ejs');//Esta linea nos permite asignar el motor de plantillas que vamos a utilizar en el proyecto.
app.set('views', path.join(__dirname, 'views'));//Bien con esta linea lo que hacemos es concatenar el directorio de views, ocea anadir el directorio de views.

//middelewares
app.use(morgan('dev'));//Este metodo morgan lo utilizamos para saber las petiiones que se realizan al servidor.
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crudnodejs'
}, 'single'));//Aqui simplemente se establece la conneccion a la base de datos Mysql.

app.use(express.urlencoded({extended: false}))//En esta linea lo que hacemos es llamar a un metodo de express para que haci la app pueda entender los datos que vienen desde el formulario.

//routes
app.use('/', customerRoutes);//Con esta linea el servidor utilizara todas las rutas que se establezcan en el archivo

//statics files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on post 3000');
});