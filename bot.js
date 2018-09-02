client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('وُلُِڪم منوُرٍ ,ء')
    }
});

client.on('message', message => {
    if(message.content === 'برب'){
        message.channel.send('تيت ي حٍلُِوُ لُِآ تتأخـرٍ ,ء')
    }
});

client.on('message', message => {
    if(message.content === 'باك'){
        message.channel.send('وُلُِڪم منوُرٍ ,ء')
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
