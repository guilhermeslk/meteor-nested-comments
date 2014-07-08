/**
	Server Methods
**/

Meteor.publish("postList", function() {
	return Posts.find({});
});

Meteor.publish("commentsList", function() {
	return Comments.find({});
})

Meteor.publish("usersData", function() {
   return Meteor.users.find({}, { fields: { emails: 1 } });
});

Meteor.startup(function () {
	Meteor.methods({
		removeCommentById: function(commentId) {
			Comments.remove({_id: commentId} );
		}
	});
});