const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var exist = 0;

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
    apparition = Math.ceil(Math.random() * 28800)
    console.log(apparition);
    if (apparition === 10000)
    {
      a.channel.send("Un pirate apparait !");
      exist = 1;
      setTimeout(function(){
        if (exist === 1)
        {
          a.channel.send("Le pirate est parti...");
          exist = 0;
        }
      }, 420000);
    }
  }
}

module.exports.help = {
  name: "pirate"
}
