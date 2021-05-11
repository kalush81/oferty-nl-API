const sendEmail = require("./sendEmail.js");

module.exports = (res) => {
  sendEmail(
    "bla bla wystapil jakis problem ze zbyt duzym payloadem od clienta"
  );
  res.send("the message you try upload is too big");
};
