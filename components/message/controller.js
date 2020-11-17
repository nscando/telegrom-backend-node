const store = require('./store');

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
          store.add(fullMessage);
          resolve(fullMessage);
     });

};

function getMessages() {
     return new Promise((resolve, reject) => {
          resolve(store.list());
     })
};

function updateMessages(id, message) {
     return new Promise(async (resolve, reject) => {
          console.log(` ID: ${id}`);
          console.log(` Mensaje: ${message}`);
          if (!id || !message) {
               reject("Invalid data");
               return false;
          }
          const result = await store.updateMessage(id, message);
          resolve(result);
     });
}

module.exports = {
     addMessage,
     getMessages,
     updateMessages
};