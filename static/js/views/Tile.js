zc.views.Tile = zc.views.Base.extend({

	tagName: 'div',
	className: 'tile',

	options: {
		xpos: 0,
		ypos: 0,
		x: 0,
		y: 0
	},

	x: 0,
	y: 0,

	initialize: function() {
		_.bindAll(this, 'render');
		this.x = this.options.x;
		this.y = this.options.y;
		return this.render();
	},
	render: function() {
		this.el = $(this.el);
		// Obvious, isn't it?
		this.el.css({
			'left': this.options.xpos,
			'top': this.options.ypos
		});
		this.el.data('x', this.x);
		this.el.data('y', this.y);
		return this;
	}
});
