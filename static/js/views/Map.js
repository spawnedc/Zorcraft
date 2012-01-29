zc.views.Map = zc.views.Base.extend({

	el: $('#map'),

	initialize: function() {
		_.bindAll(this, 'render');
		this.info('Initialized map view');
	},

	render: function() {
		this.el.addClass('ready');
	}

});