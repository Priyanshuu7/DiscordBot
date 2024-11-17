// use for .env file//
require("dotenv").config();

// discord credeintials //
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const token = process.env.DISCORD_BOT_TOKEN;

// create messgae//
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split(" ")[1];
    return message.reply({
      content: "Generated short url id for " + url,
    });
  }

  //bot reply to the message//
  message.reply({
    content: "Hello Priyanshu Sir",
  });
});

// slash commands//
client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong");
  }
});

client.login(token);
