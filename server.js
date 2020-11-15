const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function (req, res) {
     console.log(req.headers);
     res.header({
          "custom-header": "valor personalizado",
          "cache-control": "max-age=60"
     });
     response.success(req, res, 'Lista de Mensajes!', 200);
});

router.post('/message', function (req, res) {
     console.log(req.query);
     if (req.query.error == 'ok') {
          response.error(req, res, 'Error inesperado', 404, 'es solo una simulacion de errores');
     } else {
          response.success(req, res, 'Mensaje Creado con Exito!', 201);
     }
     // res.send('Mensaje añadido correctamente!');

});

router.delete('/message', function (req, res) {
     console.log(req.query);
     console.log(req.body);
     response.success(req, res, 'Mensaje eliminado correctamente!', 201);
});
// app.use('/', function (req, res) {
//      res.send('hola');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la app esta escuchando en http://localhost:3000');