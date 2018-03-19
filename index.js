const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("anon is stupid");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


    if(cmd === `${prefix}kill`){
      return message.channel.send("`u got it fam`");
    }


    if(cmd === `${prefix}die`){
      return message.channel.send("`ok`");
    }

    if(cmd === `${prefix}kys`){
      return message.channel.send("`rude.` :angry:")
    }

    if(cmd === `${prefix}invite`){

      let inviteembed = new Discord.RichEmbed()
        .setTitle("-> **Invite me to a server!** <-")
        .setColor("#ff5656")
        .setURL("https://discordapp.com/api/oauth2/authorize?client_id=421462291415040000&permissions=8&scope=bot")
        .setImage("https://cdn.discordapp.com/attachments/424415350222749696/424450339438198784/doggie.PNG");


      return message.channel.send(inviteembed);
    }

  if(cmd === `${prefix}sinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
      .setDescription("__**Server Info**__")
      .setColor("#63ff94")
      .setThumbnail(sicon)
      .addField("Server Name:", message.guild.name)
      .addField("Total Members Joined:", message.guild.memberCount)
      .addField("User Joined At:", message.member.joinedAt)
      .addField("Server Created At:", message.guild.createdAt);



    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}sicon`){

    let servcon = message.guild.iconURL
    let serviconembed = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .addField("__Server Icon__", message.guild.iconURL)
      .setImage(servcon);


    return message.channel.send(serviconembed);
  }


  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Info")
    .setColor("#0c00ff")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}help`){

    let cmdsembed = new Discord.RichEmbed()
    .setTitle("__**Wawgii Commands List**__")
    .setColor("#f2f2f2")
    .addField("Utile Commands")
    .setImage("https://cdn.discordapp.com/attachments/424415350222749696/424576081916461058/unknown.png");


    return message.author.send(cmdsembed);
  }



});

client.login(process.env.BOT_TOKEN);
