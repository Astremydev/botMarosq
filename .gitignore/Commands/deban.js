const Discord = require("discord.js");
const botconfig = require("./config.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.guild.channels.find("name", "débannissement")) return;
  let contenu = args.join(" ");
  let Commande = new Discord.RichEmbed()
  .setTitle("Demande de déban")
  .setColor("#F6FE00")
  .addField("Demande de : " + message.author.username + "\n\nMessage : " + contenu);

  message.delete();
  message.member.guild.channels.find("name", "débannissement").send(Commande);
  message.author.createDM().then(channel => {
    channel.send('Votre demande de déban à été faite ! Contenu : ' + contenu);
  });
  return;
}

module.exports.help = {
  name: "deban"
}
