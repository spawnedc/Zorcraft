zc.views.Base = Backbone.View.extend({
	// This is the base view which all the other views should extend.

	initialize: function() {
		_.bindAll(this, 'log', 'info', 'warn', 'error');
	},
	// Basic log wrapper
	log: function(msg, level) {
		if(zc.debugMode) {

			if(_.isUndefined(level)) {
				level = 'log';
			}

			console[level](msg);
		}
	},
	// Shortcut functions
	info: function(msg) {
		this.log(msg, 'info');
	},
	warn: function(msg) {
		this.log(msg, 'warn');
	},
	error: function(msg) {
		this.log(msg, 'error');
	},
});
