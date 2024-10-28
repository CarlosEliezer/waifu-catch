import { REST, Routes, Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

import commands from './commands.js';
import handleMessage from './handleMessage.js';
import handleSlashCommand from './handleSlashCommand.js';

dotenv.config();

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
const client = new Client({ 
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
   ]
});

try {
   console.log('Started refreshing application (&) commands.');

   await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

   console.log('Successfully reloaded application (&) commands.');
} catch (error) {
   console.error(error);
}

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

// Handle commands where are used slash(/)
handleSlashCommand(client);

// Handle commands where are used the specific character before the message
handleMessage(client);

client.login(process.env.DISCORD_TOKEN);