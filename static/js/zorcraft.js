var zc = {

	debugMode: true,

	map: {},
	main: {},

	// Basic log wrapper
	log: function(args) {
		if(zc.debugMode) {
			var validLogLevels = ['log', 'info', 'warn', 'error'];
			var level = args.pop();

			if(_.isUndefined(level) || _.indexOf(validLogLevels, level) == -1) {
				level = 'log';
			}
			console[level](args.join(' '));
		}
	},

	// Shortcut functions
	info: function() {
		var args = [];
		_.each(arguments, function(arg) {
			args.push(arg);
		});
		args.push('info');
		zc.log(args);
	},
	warn: function() {
		arguments.push('warn');
		zc.log(arguments);
	},
	error: function() {
		arguments.push('error');
		zc.log(arguments);
	}
};