function handleCommand(command) {
   if(command === '') {
      return undefined;
   }

   if(command === 'ping') {
      return 'I\'m working!!';
   }

   if(command === 'uwu') {
      const kawaii = Math.round(Math.random(1));
      return kawaii == 1 ? 'you\'re Kawaii UwU.' : 'you\'re UGLY!';
   }
}

export default handleCommand