/**
	App: Comments w/ Bootstrap
	Author: Guilherme Solinscki (guilherme.slnk@gmail.com)
	Github: https://github.com/guilhermeslk/meteor-nested-comments
**/
Meteor.startup(function() {
	UI.registerHelper('userEmail', function(userId) {
		var user = Meteor.users.findOne(userId);

		if (user && user.emails && user.emails[0].address) {
			return user.emails[0].address;
		} 
	});
});