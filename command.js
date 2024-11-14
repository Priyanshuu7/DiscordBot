require("dotenv").config();
const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];
const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

const rest = new REST({ version: "10" }).setToken(token);
(async () => {
  try {
    await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    });
  } catch (error) {
    console.error(error);
  }
})();