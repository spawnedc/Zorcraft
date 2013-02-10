zc.main.Game = Backbone.View.extend({

	el: 'body',

	map: null,

	initialize: function() {
		_.bindAll(this, 'loadMap', 'renderMap');
		return this;
	},

	loadMap: function() {
		$.ajax({
			url: '/static/data/map1.json',
			data: {},
			dataType: 'json',
			error: function(err) { console.warn(err) },
			success: this.renderMap
		});
	},

	renderMap: function(mapData) {
		this.map = new zc.map.Main({data: mapData});
		this.map.render();
	},

	render: function() {
		this.loadMap();
		return this;
	}
});