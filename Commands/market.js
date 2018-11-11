const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.guild.channels.find("name", "market")) return;
  let Commande = new Discord.RichEmbed()
  .setTitle(message.author.username)
  .setColor("#C03000")
  .addField("Vend : " + args[0] + "\nPrix : " + args[1], inline="Market");

  message.delete();
  message.member.guild.channels.find("name", "market").send(Commande).then(msg => msg.delete(21600));
  return;
}

module.exports.help = {
  name: "market"
}
