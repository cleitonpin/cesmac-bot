require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
const { init } = require('./utils/aticidade');

client.on('ready', () => {
    console.log('Ready')
    init(client);
    client.user.setPresence({ activity: { name: '😎', type: 0 } })
});


client.login(process.env.TOKEN)