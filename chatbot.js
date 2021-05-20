//コンソールデバッグ
console.log ("====デバッグ中===");


//最初のコード
const Discord = require('discord.js');
const client = new Discord.Client();

const token = "ODQ0ODEwNTM0OTkzMjY0NjUw.YKX1Hw.1zo6hCt4OWZ5DMhM2N-wHi7gQKU";

client.on("ready",() => {
    console.log(`${client.user.username}としてログインしています。`);
});

client.login(token);