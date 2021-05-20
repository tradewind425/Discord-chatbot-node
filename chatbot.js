//コンソールデバッグ
console.log ("====デバッグ中===");


//最初のコード
const Discord = require('discord.js');
const client = new Discord.Client();

const token = "ここにトークン";

client.on("ready",() => {
    console.log(`${client.user.username}としてログインしています。`);
});

client.login(token);