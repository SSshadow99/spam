const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const myid = ['318705077734998017'];// ايدي حسابك
const prefix = ['#'];
 
client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : n3k4a `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});
 
client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`2 Account Online ✩' `);
   console.log(`----------------`);
});
 
client3.on('ready', () => {
   console.log(`----------------`);
   console.log(`3 Account Online ✩' `);
   console.log(`----------------`);
});


client4.on('ready', () => {
   console.log(`----------------`);
   console.log(`4 Account Online ✩' `);
   console.log(`----------------`);
});

client5.on('ready', () => {
   console.log(`----------------`);
   console.log(`5 Account Online ✩' `);
   console.log(`----------------`);
});
 

client6.on('ready', () => {
   console.log(`----------------`);
   console.log(`6 Account Online ✩' `);
   console.log(`----------------`);
});

client7.on('ready', () => {
   console.log(`----------------`);
   console.log(`7 Account Online ✩' `);
   console.log(`----------------`);
});
  


 
client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client2.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



 
client3.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client3.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client3.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client3.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 
client4.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client4.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client4.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client4.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 
client5.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client5.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client5.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client5.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
  
client6.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client6.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client6.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client6.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 
client7.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client7.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client7.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client7.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000000000000000000000000000000000000000000000000000000000000000000000000000000000000; x++) {
        message.channel.send(`**NEW spam code 2019 by n3k4a  - الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر الله اكبر ر الله اكبر الله اكبر **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
         
        }
      }
});
 
client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "تحدث") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);
client7.login(process.env.TOKEN7);
