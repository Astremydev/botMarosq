const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ça !").then(msg => msg.delete(5000));

  message.delete();
  let helpmodo = new Discord.RichEmbed()
    .setDescription("Commandes :")
    .setColor("#F6FE00")
    .addField(botconfig.prefix + "mute 'temps' (en secondes)\n" + botconfig.prefix + "clear : supprimer un certain nombre de messages du tchat");
    return message.channel.send(helpmodo).then(msg => msg.delete(10000));
}

module.exports.help = {
  name: "helpmod"
}
