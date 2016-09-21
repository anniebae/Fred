var ProjectBtnView = Backbone.View.extend ({
	
	el: '#project-btn',
	projBtnTemplate: _.template($('#proj-btn-template').html()),

	initialize: function() {
		this.render();
		
	},

	// events: {
	// 	'click #btn-port' : 'initialize',
	// 	'click #btn-travel' : 'showTravel',
	// },

	render: function() {
		this.$el.html(this.projBtnTemplate());
		
	},

});