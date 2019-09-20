const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const myid = ['318705077734998017'];// ايدي حسابك
const prefix = ['#'];
 
client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : SHADOW `);
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
  

client8.on('ready', () => {
   console.log(`----------------`);
   console.log(`8 Account Online ✩' `);
   console.log(`----------------`);
});
  

client9.on('ready', () => {
   console.log(`----------------`);
   console.log(`9 Account Online ✩' `);
   console.log(`----------------`);
});
  



client10.on('ready', () => {
   console.log(`----------------`);
   console.log(`10 Account Online ✩' `);
   console.log(`----------------`);
});
  


client11.on('ready', () => {
   console.log(`----------------`);
   console.log(`11 Account Online ✩' `);
   console.log(`----------------`);
});
  

client12.on('ready', () => {
   console.log(`----------------`);
   console.log(`12 Account Online ✩' `);
   console.log(`----------------`);
});
  

client13.on('ready', () => {
   console.log(`----------------`);
   console.log(`13 Account Online ✩' `);
   console.log(`----------------`);
});
  

client14.on('ready', () => {
   console.log(`----------------`);
   console.log(`14 Account Online ✩' `);
   console.log(`----------------`);
});
  

client15.on('ready', () => {
   console.log(`----------------`);
   console.log(`15 Account Online ✩' `);
   console.log(`----------------`);
});
  

client16.on('ready', () => {
   console.log(`----------------`);
   console.log(`16 Account Online ✩' `);
   console.log(`----------------`);
});
  

client17.on('ready', () => {
   console.log(`----------------`);
   console.log(`17 Account Online ✩' `);
   console.log(`----------------`);
});
  

client18.on('ready', () => {
   console.log(`----------------`);
   console.log(`18 Account Online ✩' `);
   console.log(`----------------`);
});
  

client19.on('ready', () => {
   console.log(`----------------`);
   console.log(`19 Account Online ✩' `);
   console.log(`----------------`);
});
  

client20.on('ready', () => {
   console.log(`----------------`);
   console.log(`20 Account Online ✩' `);
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
 
client.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client2.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client3.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client4.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client4.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client5.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client5.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client6.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client6.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
 
client7.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client7.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 

client8.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client8.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client8.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client8.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client8.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 
 

client9.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client9.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client9.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client9.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client9.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 

client10.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client10.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client10.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client10.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client10.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
 


 
client11.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client11.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client11.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client11.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client11.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client11.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   

 
client12.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client12.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client12.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client12.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client12.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client12.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   

 
client13.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client13.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client13.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client13.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client13.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client13.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   


 
client14.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client14.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client14.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client14.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "605149790816436267";
    setInterval(()=>{
    client11.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client14.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   


 
client15.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client15.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client15.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client15.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client15.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client15.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   


 
client16.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client16.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client16.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client16.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client16.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client16.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   



 
client17.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client17.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client17.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client17.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client17.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client17.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   

 
client18.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client18.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client18.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client18.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client18.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client18.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   


 
client19.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client19.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client19.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client19.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client19.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client19.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'SHADOW'); //لازم تعمل الرتبه دي في السيرفر  Role.n3k4a
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});
   


 
client20.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});
 
client20.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});
 
client20.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});
 
client20.on('ready', async() => {
var server = "519890778823196672"; 
var channel = "624010060846202910";
    setInterval(()=>{
    client20.guilds.get(server).channels.get(channel).send('SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > SHADOW IS THE ONE > ')
    },305);
})


client20.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
 
 
if (command == "say") {
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
client8.login(process.env.TOKEN8);
client9.login(process.env.TOKEN9);
client10.login(process.env.TOKEN10);
client11.login(process.env.TOKEN11);
client12.login(process.env.TOKEN12);
client13.login(process.env.TOKEN13);
client14.login(process.env.TOKEN14);
client15.login(process.env.TOKEN15);
client16.login(process.env.TOKEN16);
client17.login(process.env.TOKEN17);
client18.login(process.env.TOKEN18);
client19.login(process.env.TOKEN19);
client20.login(process.env.TOKEN20);
