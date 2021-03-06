const Model = require('./model');

function addMessage(message) {
     // list.push(message);
     const myMessage = new Model(message);
     myMessage.save();
};

async function getMessages(filterChat) {
     return new Promise((resolve, reject) => {
          let filter = {};
          if (filterChat !== null) {
               filter = { chat: filterChat };
          }
          Model.find(filter)
               .populate('user')
               .exec((error, populated) => {
                    if (error) {
                         reject(error);
                         return false;
                    }

                    resolve(populated);
               });
     })
}

async function updateMessage(id, message) {
     const foundMessage = await Model.findOne({ _id: id });

     foundMessage.message = message;
     const newMessage = await foundMessage.save();
     return newMessage;
};

function removeMessage(id) {
     const delMessage = Model.deleteOne({ _id: id });
     return delMessage;
}

module.exports = {
     add: addMessage,
     list: getMessages,
     updateMessage: updateMessage,
     remove: removeMessage
};
