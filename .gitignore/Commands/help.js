const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let helpcommands = new Discord.RichEmbed()
    .setDescription("Commandes :")
    .setColor("#C03000")
    .addField(botconfig.prefix + "help : Affiche les commandes\n" + botconfig.prefix + "report 'pseudo' 'raison' : Reporter quelqu'un\n" + botconfig.prefix + "deban 'raison' : faire une demande de déban\n" + botconfig.prefix + "helpmod : Voir les commandes de modération\n" + botconfig.prefix + "pan : tuer le pirate\n" + botconfig.prefix + "hello : dire bonjour au bot");
    return message.channel.send(helpcommands).then(msg => msg.delete(10000));
}

module.exports.help = {
  name: "help"
}
