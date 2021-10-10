const Discord = require("discord.js");
const Jimp = require("jimp");
const fs = require("fs");
const Moment = require("moment-timezone");
const colors = require('./../../colors.json')
const fetch = require("node-fetch");
    module.exports = {
  name: "tweet",
  aliases: [],
  run: async (bot, message, args) => {

const user = message.author.username;
		const text = args.join(" ");


	

		if(!text){
			return message.channel.send("images/tweet:MISSING_TEXT");
		}


	

		try {
			const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "tweet.png");
		message.channel.send(`${message.author.username} Just Tweeted!!`, attachment)
			message.delete();
		} catch(e){
		
message,channel.send("Error Occured PLease go in Support server and contact the developer of the bot")
	
 
}

}
    }








































/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */    