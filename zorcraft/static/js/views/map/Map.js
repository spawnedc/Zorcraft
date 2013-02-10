/*global $, Backbone, _, zc */
(function () {
	"use strict";
	zc.map.Main = Backbone.View.extend({

		el: '#map',

		events: {
			'mouseenter .tile': 'showTileInfo'
		},

		// Defaults
		options: {
			map_size: 10,
			x_size: 10,
			y_size: 10,
			tile_size: 64,
			xcorrection: 30,
			ycorrection: 15
		},

		tiles: [],

		half_point: 0,

		initialize: function () {
			_.bindAll(this, 'render', 'showTileInfo');

			this.mapData = this.options.data;

			this.options.x_size = this.mapData.length;
			this.options.y_size = this.mapData[0].length;
			this.options.map_size = this.options.x_size;

			// This will be useful when calculating each tile's y position
			this.half_point = (this.options.map_size * (this.options.tile_size / 2)) / 2;

			zc.info('Initialized map view');
		},

		showTileInfo: function (evt) {
			// Shows the info for the tile (x, y)
			var target = $(evt.currentTarget);
			zc.info('Tile info: x: ' + target.data('x') + ', y: ' + target.data('y'));
		},

		addTile: function (x, y) {
			// Watch these calculations carefully, they took a lot time to figure out
			// TODO: instead of using x/y correction, we should be able to get them from the
			// tile size, since they are going to be variable

			// Calculate x position of the tile
			var xpos = this.options.tile_size + ((x * this.options.xcorrection) + (y * this.options.xcorrection)),
				// This is a bit more tricky, this is where this.half_point gets in the game
				ypos = this.half_point - ((y * this.options.ycorrection) - (x * this.options.ycorrection));

			// Create our new TileView
			this.tiles[y][x] = new zc.map.Tile({
				ypos: ypos,
				xpos: xpos,
				x: x,
				y: y,
				className: 'tile ' + this.mapData[x][y]
			});

			// TODO: These are for testing, they shouldn't be here
			this.tiles[y][x].$el.addClass('tile-' + x + '-' + y);

			// Finally add the tile to our map
			this.$el.append(this.tiles[y][x].el);
		},

		render: function () {
			// TODO: Instead of a fixed sizes, we need to be able to pass a json object with
			// detailed map info in it
			var x,
				y;

			for (y = 0; y < this.options.y_size; y++) {
				this.tiles[y] = [];
				for (x = 0; x < this.options.x_size; x++) {
					this.addTile(x, y);
				}
			}
			this.$el.addClass('ready');
		}
	});
}());
