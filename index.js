const Discord = require("discord.js");
const { Client } = require("discord.js");
const client = new Discord.Client({ intents: 32509 })
const { token } = require("./config.json")

client.on("ready",async() =>{
console.log(`bot oneline!`)
client.user.setActivity(`đang bưng nước`,{type: "PLAYING" })
});
client.login(token) 