const minimist = require('minimist');

module.exports = () => {

	const args = minimist(process.argv.slice(2));
	const cmd = args._[0];

	// Only load modules into memory when necessary
	switch (cmd) {
		case 'today':
			require('./cmds/today')(args);
			break;
		case 'printargv':
			require('./cmds/printargs')();
			break;
		default:
			console.error(`"${cmd}" is not a valid command.`);
			break
	}
};

