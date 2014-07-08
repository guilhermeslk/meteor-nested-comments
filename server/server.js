/**
	Server Methods
**/

Meteor.startup(function () {
	Meteor.methods({
		removeCommentById: function(commentId) {
			Comments.remove({_id: commentId} );
		}
	});
});