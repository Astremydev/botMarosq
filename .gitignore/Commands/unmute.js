const Discord = require("discord.js");
const botconfig = require("./config.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ça !").then(msg => msg.delete(5000));
  let mutejoueur = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!mutejoueur) return message.channel.send("Utilisateur introuvable");
  var muteRole = mutejoueur.guild.roles.find('name', 'Mute');

  message.delete();
  mutejoueur.removeRole(muteRole);
  message.channel.send(mutejoueur + " a été démuté !").then(msg => msg.delete(5000));
  return;
}

module.exports.help = {
  name: "unmute"
}
