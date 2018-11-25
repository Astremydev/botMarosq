const Discord = require("discord.js");
const botconfig = require("./config.json");
var exist = 0;
var compte = 0;

module.exports.run = async (bot, message, tir) => {
  message.delete();
  if (tir === "0")
  {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission de faire ça !").then(msg => msg.delete(5000));
    a = message;
    IntervalId = setInterval(pirate, 1000);
  }
  else
  {
    if(exist === 1)
    {
      message.channel.send("Ho noooonn... " + message.author.username + " à tué le Pirate !")
      exist = 0;
      clearTimeout();
      message.author.createDM().then(channel => {
        channel.send('Bravo, vous avez tué le pirate !');
      });
    }
    else
    {
      message.channel.send("Bah voyons, il n'y a pas de pirate ici !").then(msg => msg.delete(5000));
    }
  }
}

function pirate() {
  if (exist === 0)
  {
    apparition = Math.ceil(Math.random() * 2)
    if (Math.ceil(Math.random() * 2) == 2)
    {
      compte++;
    }
    if (compte == 5000)
    {
      compte = 0;
      a.channel.send("Un pirate apparait !");
      exist = 1;
      setTimeout(function(){
        a.channel.send("Le pirate est parti...");
        exist = 0;
      }, 1800000);
    }
  }
}

module.exports.help = {
  name: "pirate"
}
