import handleCommand from './handleCommand.js';

async function handleMessage(client) {
   client.on('messageCreate', async message => {
      if(getFirstCharacter(message.content) !== '&') return;

      const command = getCommand(message.content);
      const response = handleCommand(command);

      if(!response) {
         return;
      }

      await message.reply(`@${message.author.globalName} ${response}`);
   });
}

function getFirstCharacter(string) {
   return string.slice(0,1);
}

function getCommand(string) {
   return string.slice(1);
}

export default handleMessage;