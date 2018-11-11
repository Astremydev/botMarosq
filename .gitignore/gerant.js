const Discord = require("discord.js");
const botconfig = require("./Commands/config.json");
const fs = require("fs");
var connection = config.connect + config.co;

const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0){
    console.log("Aucune commandes");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require("./Commands/" + f);
    console.log(f + " loaded !");
    bot.commands.set(props.help.name, props);
  });
});

bot.login(connection);

bot.on("ready", async () => {
  console.log(bot.user.username + " is online !");
  bot.user.setActivity(config.prefix + "help");
});

bot.on('guildMemberRemove', member => {
  if (member.guild.channels.find("name", "bienvenue")) member.guild.channels.find("name", "bienvenue").send(member + ' est parti !')
});

bot.on("message", async message => {
  if (message.guild.roles.find('name', 'Visiteur') && !message.member.roles.find('name','Visiteur')) {
    message.delete();
    if (message.content === config.accepter) {
      if (message.member.guild.channels.find("name", "bienvenue")) message.member.guild.channels.find("name", "bienvenue").send('Bienvenue ' + message.author.username + ' !')
      var role = message.guild.roles.find('name', 'Visiteur');
      message.member.addRole(role);
      message.reply("Vous avez accepté les rêgles, bon jeu !").then(msg => msg.delete(5000));
      return;
    }
    return;
  }
  if (message.member.roles.find('name','Mute') && !message.member.roles.find('name','Directeur')) return message.delete();

  if (message.content === "!pirate" || message.content === "!pan")
  {
    if (message.content === "!pirate")
    {
      tir = "0";
    }
    else
    {
      tir = "1";
    }
    let commandfile = bot.commands.get("pirate");
    commandfile.run(bot, message, tir);
    return;
  }
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(cmd[0] === prefix && commandfile) commandfile.run(bot, message, args);
});
