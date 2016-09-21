var ProjectView = Backbone.View.extend ({
	
	el: '#project-nav',
	navTemplate: _.template($('#nav-template').html()),
	portfolioTemplate: _.template($('#portfolio-template').html()),
	travelTemplate: _.template($("#travel-template").html()),
	initialize: function() {
		this.renderNav();
		this.showPortfolio();
	},
	events: {
		'click #btn-portfolio' 	: 'showPortfolio',
		'click #btn-travel' 	: 'showTravel'
	},
	renderNav: function() {
		this.$el.html(this.navTemplate());
		return this;
	},

	showPortfolio: function() {
		this.renderNav();
		alert('showPortfolio clicked');
		$('#project-carousel').html(this.portfolioTemplate());
		$("#proj1").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true
		});
	},


	showTravel: function() {
		// this.renderNav();
		alert('showTravel function');
		$('#project-carousel').html(this.travelTemplate());
		$("#proj2").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true
		});
		
	},

});