require('dotenv').config();
const minimist = require('minimist');

module.exports = () => {

	const args = minimist(process.argv.slice(2));
	console.log(process.env.YAHOO_SECRET_KEY);
	// Default to help command if naked invoked
	let cmd = args._[0] || 'help';
	
	// Minimist Default Bools
	if (args.version || args.v) {
		cmd = 'version'
	  }
	
	  if (args.help || args.h) {
		cmd = 'help'
	  }

	// Only load modules into memory when necessary
	switch (cmd) {
		case 'today':
			require('./cmds/today')(args);
			break;
		case 'forecast':
      		require('./cmds/forecast')(args);
      		break;
		case 'printargv':
			require('./cmds/printargs')();
			break;
		case 'version':
			require('./cmds/version')(args);
			break;			
		case 'help':
			require('./cmds/help')(args);
			break;
		default:
			console.error(`"${cmd}" is not a valid command.`);
			break;
	}
};

