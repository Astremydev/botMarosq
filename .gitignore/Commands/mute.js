const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ça !").then(msg => msg.delete(5000));
  let mutejoueur = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!mutejoueur) return message.channel.send("Utilisateur introuvable");

  message.delete();

  var muteRole = mutejoueur.guild.roles.find('name', 'Mute');
  mutejoueur.addRole(muteRole);

  if (args[2] === "s") mutetemps = args[1] * 1;
  else if (args[2] === "m") mutetemps = args[1] * 60;
  else if (args[2] === "h") mutetemps = args[1] * 3600;
  else if (args[2] === "j") mutetemps = args[1] * 86400;
  else return;

  message.channel.send(mutejoueur + " a été mute pendant " + args[1] + " " + args[2]).then(msg => msg.delete(5000));

  mutejoueur.createDM().then(channel => {
    channel.send('Vous avez été mute pour ' + args[1] + " " + args[2]);
  });

  setTimeout(function(){
    mutejoueur.removeRole(muteRole);
    message.channel.send(mutejoueur + " a été démuté !").then(msg => msg.delete(5000));
  }, mutetemps * 1000);
  return;
}

module.exports.help = {
  name: "mute"
}
