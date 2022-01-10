// Require the necessary discord.js classes
const {Client, Intents} = require("discord.js");
const {token} = require("./config.json");

// Create a new client instance
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");
});

// Replying interaction
client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const {commandName} = interaction;

	if (commandName === "ping") {
		await interaction.reply("Halo Sahabat");
	} else if (commandName === "server") {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === "user") {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === "rafi") {
		await interaction.reply(`Halo ${interaction.user.username}, jangan kejar kucing hitam pada malam hari`);
	}
});

// Login to Discord with your client's token
client.login(token);
