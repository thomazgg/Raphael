const colors = require('./../../colors.json')
module.exports = {
  name: "slowmode",
  description: "Permite definir o modo lento no canal.",
  args: true,
  usage: "<time>",
  run: (client, message, args) => {
    const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send("<:xmark:891611927900479489> Forneça um número válido");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.channel.send("slowmode definido para " + amount + " segundos");
        return;
      } else {
        message.channel.send("slowmode definido para " + amount + " segundo");
        return;
      }
    }
    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.channel.send("slowmode definido para " + amount + " minutos");
        return;
      } else {
        message.channel.send("slowmode definido para " + amount + " minuto");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.channel.send("slowmode definido para " + amount + " horas");
        return;
      } else {
        message.channel.send("slowmode definido para" + amount + " hora");
        return;
      }
    } else {
      message.channel.send(
        "<:xmark:891611927900479489> Você só pode definir segundos (s), minutos (min) e horas (h)"
      );
    }
  }
};