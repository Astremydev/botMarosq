const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  if (!message.member.guild.channels.find("name", "reports")) return;
  let reportjoueur = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!reportjoueur) return message.channel.send("Utilisateur introuvable");
  let raisonreport = args.join(" ").slice(22);

  let Reporter = new Discord.RichEmbed()
  .setTitle("Report")
  .setColor("#F6FE00")
  .addField("Report de : " + message.author.username + "\nUtilisateur : " + reportjoueur + "\nRaison : " + raisonreport);

  message.delete();
  message.member.guild.channels.find("name", "reports").send(Reporter);
  message.author.createDM().then(channel => {
    channel.send('Votre report à bien été envoyé ! Contenu : ' + raisonreport);
  });
  return;
}

module.exports.help = {
  name: "report"
}
