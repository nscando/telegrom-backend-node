const { error } = require("../../network/response");



function addMessage(user, message) {
     return new Promise((resolve, reject) => {
          if (!user || !message) {
               console.error('[messageController] No hay USER o MESSAGE');
               return reject('Datos incorrectos!');
          }
          const fullMessage = {
               user: user,
               message: message,
               date: new Date(),
          };
          console.log(fullMessage);
          resolve(fullMessage);
     });

};

module.exports = {
     addMessage
};