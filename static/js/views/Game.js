zc.main.Game = Backbone.View.extend({

    el: 'body',

    map: null,

    initialize: function() {
        this.map = new zc.map.Main();
        return this;
    },

    render: function() {
        this.map.render();
        return this;
    }
});