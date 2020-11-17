const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function (req, res) {
     controller.getMessages()
          .then((messageList) => {
               response.success(req, res, messageList, 200)
          })
          .catch(e => {
               response.error(req, res, 'Unexpected Error', 500, e)
          });
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

router.patch("/:id", function (req, res) {
     controller
          .updateMessages(req.params.id, req.body.message)
          .then((data) => {
               response.success(req, res, data, 201);
          })
          .catch((e) => {
               response.error(req, res, "Intern Error", 500, e);
          });
     //res.send("ok");
});

router.delete('/', function (req, res) {
     console.log(req.query);
     console.log(req.body);
     response.success(req, res, 'Mensaje eliminado correctamente!', 201);
});



module.exports = router;

