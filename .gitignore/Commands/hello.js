const Discord = require("discord.js");
const botconfig = require("./config.json");

module.exports.run = async (bot, message, args) => {
  message.delete();
  message.channel.send("Bonjour à toi " + message.author.username + " !").then(msg => msg.delete(3000));
}

module.exports.help = {
  name: "hello"
}
