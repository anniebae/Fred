var ProjectView = Backbone.View.extend ({
	
	el: '#project-carousel',
	portTemplate: _.template($('#port-template').html()),
	travelTemplate: _.template($('#travel-template').html()),

	initialize: function() {
		this.render();
	},

	events: {
		'click #btn-port' : 'initialize',
		'click #btn-travel' : 'showTravel',
	},

	render: function() {
		this.$el.html(this.portTemplate());
		
	},

	showTravel: function() {

		alert('showTravel function');
		this.$el.html(this.travelTemplate());
		
	}

});