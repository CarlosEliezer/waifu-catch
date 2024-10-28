import handleCommand from './handleCommand.js';

async function handleCommandSlash(client) {
   client.on('interactionCreate', async interaction => {
      if(!interaction.isChatInputCommand()) {
         return;
      }

      const response = handleCommand(interaction.commandName);
      
      if(!response) {
         return;
      }

      await interaction.reply(`<@${interaction.user.id}> ${response}`);
   });
}

export default handleCommandSlash;