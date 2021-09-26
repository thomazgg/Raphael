const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const colors = require('./../../colors.json')

module.exports = {
	name: 'corona',
	run: async (client, message, args) => {
		const baseUrl = 'https://corona.lmao.ninja/v2';

		let url; let response; let
			corona;

		try {
			url = args[0] ? `${baseUrl}/countries/${args[0]}` : `${baseUrl}/all`;
			response = await axios.get(url);
			corona = response.data;
		} catch (error) {
			return message.channel.send(`<:xmark:891611927900479489> ***${args[0]}*** Não existe ou os dados não estão sendo coletados`);
		}

		const embed = new MessageEmbed()
			.setTitle(args[0] ? `${args[0].toUpperCase()} Estatísticas` : 'Total de casos Corona em todo o mundo')
			.setColor(colors.uptime)
			.setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
			.addFields(
				{
					name: 'Total de Casos:',
					value: corona.cases.toLocaleString(),
					inline: true,
				},
				{
					name: 'Total de mortes:',
					value: corona.deaths.toLocaleString(),
					inline: true,
				},
				{
					name: 'Total Recuperado:',
					value: corona.recovered.toLocaleString(),
					inline: true,
				},
				{
					name: 'Casos ativos:',
					value: corona.active.toLocaleString(),
					inline: true,
				},
				{
					name: '\u200b',
					value: '\u200b',
					inline: true,
				},
				{
					name: 'Casos Críticos:',
					value: corona.critical.toLocaleString(),
					inline: true,
				},
				{
					name: 'Recuperações Hoje:',
					value: corona.todayRecovered.toLocaleString().replace('-', ''),
					inline: true,
				},
				{
					name: 'Mortes de hoje:',
					value: corona.todayDeaths.toLocaleString(),
					inline: true,
				},
			);

		return message.channel.send(embed);
	},
};