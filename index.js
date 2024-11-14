// use for .env file//
// use for .env file//
require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const token = process.env.DISCORD_BOT_TOKEN;

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split(" ")[1];
    return message.reply({
      content: "Generated short url id for " + url,
    });
  }
  message.reply({
    content: "Heyyyy from bot",
  });
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong");
  }
});

client.login(token);
