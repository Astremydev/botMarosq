const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ça !").then(msg => msg.delete(5000));
  if(!args[0]) return;
  let Clear = new Discord.RichEmbed()
  .setTitle("Clear")
  .setColor("#F6FE00")
  .addField("Clear de : " + message.author.username + "\nNombre : " + args[0]);

  message.channel.bulkDelete(args[0]).then();
  message.channel.send(Clear).then(msg => msg.delete(5000));
  return;
}

module.exports.help = {
  name: "clear"
}
