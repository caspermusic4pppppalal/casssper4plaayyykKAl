const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('** ۗ وّلّلّّكّكّممّّ نۨــۏڕٺ ۛ ּيۧ مۭــڗ ۛ ּ، ۛ ּمۭــنۨ ۖ ڙمۭــٰا̍نۨ ̨؏ــڼۨــک ۗ :rose::wave:**');
  }
});

client.on('message', message => {
    if(message.content === 'برب'){
        message.channel.send('تيت ي حٍلُِوُ لُِآ تتأخـرٍ ,ء')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('الہٰشعار فہٰيٰ الہٰدسہٰكہٰورد')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('! - SR |')
    }
});


client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('الہٰشعار فہٰيٰ الہٰلہٰعبٰٰه')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('ζ͡𝓢ʀ')
    }
});

client.on('message', message => {
    if(message.content === 'الشعار'){
        message.channel.send('ارفہٰع راسہٰ الہٰكہٰلہٰان لہٰفہٰوق')
    }
}); 

client.login(process.env.BOT_TOKEN);
