const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {
     console.log(req.headers);
     res.header({
          "custom-header": "valor personalizado",
          "cache-control": "max-age=60"
     });
     response.success(req, res, 'Lista de Mensajes!', 200);
});

router.post('/', function (req, res) {
     console.log(req.query);
     if (req.query.error == 'ok') {
          response.error(req, res, 'Error inesperado', 404, 'es solo una simulacion de errores');
     } else {
          response.success(req, res, 'Mensaje Creado con Exito!', 201);
     }
     // res.send('Mensaje añadido correctamente!');

});

router.delete('/', function (req, res) {
     console.log(req.query);
     console.log(req.body);
     response.success(req, res, 'Mensaje eliminado correctamente!', 201);
});

module.exports = router;

