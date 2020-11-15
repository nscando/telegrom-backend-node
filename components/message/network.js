const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
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
     controller.addMessage(req.body.user, req.body.message)
          .then((fullMessage) => {
               response.success(req, res, fullMessage, 201);
          })
          .catch(e => {
               response.error(req, res, 'Datos inválidos', 400, 'Error en controller!');
          });

});

router.delete('/', function (req, res) {
     console.log(req.query);
     console.log(req.body);
     response.success(req, res, 'Mensaje eliminado correctamente!', 201);
});

module.exports = router;

