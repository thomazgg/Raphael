module.exports.run = async (client) => {
  console.log(`${client.user.tag} fez login.`);
  client.user.setActivity(`智慧之王ラファエル`, { // ${client.projectsSize} Project(s)
    type: "STREAMING",
    url: "https://twitch.tv/uthomaz"
  });
};