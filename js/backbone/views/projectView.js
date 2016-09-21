var ProjectView = Backbone.View.extend ({
	
	el: '#project-nav',
	navTemplate: 		_.template($('#nav-template').html()),
	portfolioTemplate: 	_.template($('#portfolio-template').html()),
	travelTemplate: 	_.template($("#travel-template").html()),
	wheretoTemplate: 	_.template($("#whereto-template").html()),
	whiskersTemplate: 	_.template($("#whiskers-template").html()),
	initialize: function() {
		this.renderNav();
		this.showPortfolio();
	},
	events: {
		'click #btn-portfolio' 	: 'showPortfolio',
		'click #btn-travel' 	: 'showTravel',
		'click #btn-whereto'	: 'showWhereto',
		'click #btn-whiskers'	: 'showWhiskers'
	},
	renderNav: function() {
		this.$el.html(this.navTemplate());
		return this;
	},

	showPortfolio: function() {
		this.renderNav();
		$('#project-carousel').html(this.portfolioTemplate());
		owlCarouselTrigger();
	},

	showTravel: function() {
		this.renderNav();
		$('#project-carousel').html(this.travelTemplate());
		owlCarouselTrigger();
		
	},

	showWhereto: function() {
		this.renderNav();
		$('#project-carousel').html(this.wheretoTemplate());
		owlCarouselTrigger();
	},

	showWhiskers: function() {
		this.renderNav(); 
		$('#project-carousel').html(this.whiskersTemplate());
		owlCarouselTrigger();
	}

});